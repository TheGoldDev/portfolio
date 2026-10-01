<template>
    <div
        ref="container"
        class="*:p-4 *:rounded-xl flex flex-col gap-3 break-all"
    >
        <div
            v-for="(technologies, category) in items"
            :key="category"
            class="technology-card bg-white inter-semibold-14 flex flex-col gap-2"
            :class="{
                'bg-[#2b52ff]! text-white': category === 'front',
                'border border-[#2b52ff]': category === 'backend',
                'border border-[#121212]/10': category === 'infrastructure',
            }"
        >
            <p class="uppercase inter-bold-11">
                {{ categoryLabels[category] }}
            </p>

            <div>
                <span
                    v-for="(technology, index) in technologies"
                    :key="technology"
                >
                    {{ technology }}<span v-if="index < technologies.length - 1">, </span>
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import {
    front,
    back,
    data,
    cms,
    env,
} from "../../data/technologies";

const container = ref<HTMLElement | null>(null);

const items = {
    front,
    backend: [...back, ...data],
    infrastructure: [...cms, ...env],
};

const categoryLabels = {
    front: "Core engine",
    backend: "Backend System",
    infrastructure: "Infrastructure & CMS",
};

let cards: HTMLElement[] = [];
let ctx: gsap.Context;

onMounted(() => {
    if (!container.value) return;

    cards = Array.from(
        container.value.querySelectorAll<HTMLElement>(".technology-card")
    );

    ctx = gsap.context(() => {
        const card = gsap.timeline({
        scrollTrigger: {
            trigger: cards,
            start: "top 60%",
            toggleActions: "play none none reverse",
        },
    });

    card.from(cards, {
        opacity: 0,
        y: 40,
        scale: 0.96,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
    });
    })
});

onBeforeUnmount(() => {
    ctx?.revert();
});
</script>