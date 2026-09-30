<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";
import gsap from "gsap";

const nav = ref<HTMLElement | null>(null);
const navLinks: HTMLElement[] = [];

onMounted(() => {
    const links = nav.value?.querySelectorAll<HTMLElement>(".nav-link");

    links?.forEach((link) => {
        const background = link.querySelector<HTMLElement>(".nav-background");
        const text = link.querySelector<HTMLElement>(".nav-link-text");

        if (!background || !text) return;

        const handleEnter = () => {
            gsap.killTweensOf(background);
            gsap.killTweensOf(text);

            gsap.set(background, {
                transformOrigin: "left center",
            });

            gsap.to(background, {
                scaleX: 1,
                duration: 0.4,
                ease: "power3.out",
            });

            gsap.to(text, {
                color: "#ffffff",
                duration: 0.2,
                ease: "power2.out",
            });
        };

        const handleLeave = () => {
            gsap.killTweensOf(background);
            gsap.killTweensOf(text);

            gsap.set(background, {
                transformOrigin: "right center",
            });

            gsap.to(background, {
                scaleX: 0,
                duration: 0.4,
                ease: "power3.inOut",
            });

            gsap.to(text, {
                color: "",
                duration: 0.2,
                ease: "power2.out",
            });
        };

        link.addEventListener("mouseenter", handleEnter);
        link.addEventListener("mouseleave", handleLeave);

        navLinks.push(link);

        (link as any)._handleEnter = handleEnter;
        (link as any)._handleLeave = handleLeave;
    });
});

onBeforeUnmount(() => {
    navLinks.forEach((link) => {
        const background = link.querySelector<HTMLElement>(".nav-background");

        if (background) {
            gsap.killTweensOf(background);
        }

        link.removeEventListener("mouseenter", (link as any)._handleEnter);
        link.removeEventListener("mouseleave", (link as any)._handleLeave);
    });

    navLinks.length = 0;
});
</script>

<template>
    <nav
        id="header"
        class="flex justify-between items-center py-4 -mx-5 px-5 lg:py-8 lg:-mx-16 border-b border-black/8"
    >
        <ul>
            <nuxt-link
                to="#header"
                class="inter-bold-14 uppercase"
            >
                Julien Gioffredi
            </nuxt-link>

            <p class="inter-regular-11 uppercase opacity-60">
                Full-Stack Developer © 2026
            </p>
        </ul>

        <ul
            ref="nav"
            class="flex gap-6 uppercase inter-medium-13 *:px-4 *:py-2 *:last-of-type:block *:max-lg:hidden"
        >
            <nuxt-link
                to="#about"
                class="nav-link"
            >
                <span class="nav-link-text">
                    About
                </span>

                <span class="nav-background"></span>
            </nuxt-link>

            <nuxt-link
                to="#work"
                class="nav-link"
            >
                <span class="nav-link-text">
                    Work
                </span>

                <span class="nav-background"></span>
            </nuxt-link>

            <nuxt-link
                to="#playground"
                class="nav-link"
            >
                <span class="nav-link-text">
                    Playground
                </span>

                <span class="nav-background"></span>
            </nuxt-link>

            <nuxt-link
                to="#"
                class="nav-link inter-semibold-12 border rounded-full max-lg:bg-[#2B52FF] max-lg:text-white"
            >
                <span class="nav-link-text">
                    Let's talk
                </span>

                <span class="nav-background"></span>
            </nuxt-link>
        </ul>
    </nav>
</template>

<style>
.nav-link {
    position: relative;
    overflow: hidden;
    isolation: isolate;
}

.nav-link-text {
    position: relative;
    z-index: 2;
}

.nav-background {
    position: absolute;
    inset: 0;
    z-index: 1;

    background: #2b52ff;

    transform: scaleX(0);
    transform-origin: left center;

    pointer-events: none;
}
</style>