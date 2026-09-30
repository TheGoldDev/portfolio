<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ref } from "vue";

gsap.registerPlugin(SplitText, ScrollTrigger);

const hero = ref<HTMLElement | null>(null);

let split: SplitText | null = null;
let animation: gsap.core.Tween | null = null;

function setup() {
    split?.revert();
    animation?.revert();

    split = SplitText.create(".text", {
        type: "words",
    });
}

function animate() {
    if (!split) return;

    animation?.revert();

    animation = gsap.from(split.words, {
        rotationX: -100,
        transformOrigin: "50% 50% -160px",
        opacity: 0,
        duration: 0.8,
        ease: "power3",
        stagger: 0.25,

        scrollTrigger: {
            trigger: hero.value,
            start: "top 80%",
            once: false,
        },
    });
}

onMounted(() => {
    setup();
    animate();

    window.addEventListener("resize", setup);
});

onBeforeUnmount(() => {
    animation?.revert();
    split?.revert();

    document.querySelectorAll(".text").forEach((element) => {
        element.removeEventListener("click", animate);
    });

    window.removeEventListener("resize", setup);
});
</script>

<template>
    <section ref="hero" class="flex flex-col pt-14 lg:pt-28 pb-10 lg:pb-55">
        <h1
            class="text serif-regular-56-1 lg:serif-regular-140-1 uppercase max-h-35"
            id="words"
        >
            Julien
            <span class="max-lg:serif-regular-56-2 text-[#2B52FF]">
                Gioffredi
            </span>
        </h1>

        <h2
            class="text serif-regular-48 lg:serif-regular-120 uppercase lg:pl-40 lg:max-h-33"
            id="words"
        >
            Development
        </h2>

        <h3
            class="text serif-regular-40 lg:serif-regular-100 uppercase opacity-40 lg:pl-80 lg:max-h-32.5"
            id="words"
        >
            & Experience
        </h3>
    </section>
</template>