<template>
    <div ref="section" class="ecosystem-section">
        <div class="flex flex-col gap-2">
            <p
                ref="label"
                class="ecosystem-label inter-bold-11 lg:inter-bold-12 uppercase text-[#2B52FF]"
            >
                01 // ecosystem
            </p>

            <div class="overflow-hidden">
                <h4
                    ref="title"
                    class="ecosystem-title serif-regular-36 lg:serif-regular-64 max-w-150"
                >
                    An Interconnected Constellation of Tools.
                </h4>
            </div>
        </div>

        <div
            ref="engine"
            class="ecosystem-engine pt-8 lg:pt-20"
        >
            <FullStackEngineDesktop v-if="isDesktop" />
            <FullStackEngineMobile v-if="isMobile" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useDevice } from "~/assets/composables/useDevice.ts";

import FullStackEngineDesktop from "./skills/FullStackEngineDesktop.vue";
import FullStackEngineMobile from "./skills/FullStackEngineMobile.vue";

gsap.registerPlugin(ScrollTrigger);

const { isMobile, isDesktop } = useDevice();

const section = ref<HTMLElement | null>(null);
const label = ref<HTMLElement | null>(null);
const title = ref<HTMLElement | null>(null);
const engine = ref<HTMLElement | null>(null);

let ctx: gsap.Context;

onMounted(() => {
    if (!section.value) return;

    ctx = gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section.value,
                start: "top 60%",
                toggleActions: "play none none reverse",
            },
        });

        // Label
        tl.from(label.value, {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
        });

        // Title
        tl.from(
            title.value,
            {
                yPercent: 110,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
            },
            "-=0.3"
        );
    }, section.value);
});

onBeforeUnmount(() => {
    ctx?.revert();
});
</script>

<style scoped>
.ecosystem-title {
    will-change: transform;
}

.ecosystem-label {
    will-change: transform, opacity;
}

.ecosystem-engine {
    will-change: transform, opacity;
}
</style>