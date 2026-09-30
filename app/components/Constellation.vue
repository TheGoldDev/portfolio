<template>
  <div
    ref="container"
    class="relative flex justify-center items-center min-h-125 bg-[#121212]/1 border-[#121212]/8 border overflow-hidden"
  >
    <div ref="itemsContainer" class="absolute inset-0">
      <template v-for="item in front" :key="item">
        <div class="tech-item absolute px-4 py-2 z-15 border border-[#2B52FF]">{{ item }}</div>
      </template>

      <template v-for="item in back" :key="item">
        <div class="tech-item absolute px-4 py-2 z-15 border border-[#2B52FF]">{{ item }}</div>
      </template>

      <template v-for="item in data" :key="item">
        <div class="tech-item absolute px-4 py-2 z-15 border border-[#2B52FF]">{{ item }}</div>
      </template>

      <template v-for="item in cms" :key="item">
        <div class="tech-item absolute px-4 py-2 z-15 border border-[#2B52FF]">{{ item }}</div>
      </template>

      <template v-for="item in env" :key="item">
        <div class="tech-item absolute px-4 py-2 z-15 border border-[#2B52FF]">{{ item }}</div>
      </template>
    </div>

    <p
      class="rounded-full bg-[#2B52FF] text-white inter-semibold-14 px-4 py-2 z-20"
    >
      Full-Stack Engine
    </p>

    <hr
      class="absolute z-10 w-full max-w-[60dvw] h-px opacity-10 bg-[#2B52FF]"
    />

    <div
      class="w-100 h-100 absolute border border-dashed border-[#2B52FF] rounded-full opacity-30 spin-animation"
    />

    <div
      class="w-60 h-60 absolute border border-dashed border-[#121212] rounded-full opacity-30 spin-animation-reverse"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import gsap from "gsap";

const container = ref<HTMLElement | null>(null);

const front = [
  "Vue.js",
  "Nuxt.js",
  "Javascript ES6+",
  "HTML",
  "CSS",
  "SCSS",
  "Tailwind CSS",
  "Twig",
];

const back = ["PHP 8", "Symfony", "Doctrine", "Laravel"];

const data = [
  "REST",
  "GraphQL",
  "SQL",
  "MySQL",
  "Postman",
  "PostgreSQL",
];

const cms = ["Strapi", "Drupal", "WordPress", "Prestashop"];

const env = ["Docker", "Git", "Linux"];

let items: HTMLElement[] = [];

const handleMouseMove = (event: MouseEvent) => {
  if (!container.value) return;

  const rect = container.value.getBoundingClientRect();

  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  items.forEach((item) => {
    const itemX = item.offsetLeft;
    const itemY = item.offsetTop;

    const dx = mouseX - itemX;
    const dy = mouseY - itemY;

    const distance = Math.sqrt(dx * dx + dy * dy);

    const magneticRadius = 150;

    if (distance < magneticRadius) {
      const strength = 1 - distance / magneticRadius;

      const moveX = dx * strength * 0.35;
      const moveY = dy * strength * 0.35;

      gsap.to(item, {
        x: moveX,
        y: moveY,
        scale: 1 + strength * 0.08,
        duration: 0.5,
        ease: "power3.out",
        overwrite: true,
      });
    } else {
      gsap.to(item, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
        overwrite: true,
      });
    }
  });
};

const handleMouseLeave = () => {
  items.forEach((item) => {
    gsap.to(item, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)",
      overwrite: true,
    });
  });
};

onMounted(() => {
  if (!container.value) return;

  items = Array.from(
    container.value.querySelectorAll<HTMLElement>(".tech-item")
  );

  const positions = [
    [15, 18],
    [28, 10],
    [46, 20],
    [65, 12],
    [82, 22],

    [8, 42],
    [24, 35],
    [40, 44],
    [58, 34],
    [75, 42],
    [90, 48],

    [15, 68],
    [32, 58],
    [50, 72],
    [68, 62],
    [85, 70],

    [25, 88],
    [45, 84],
    [65, 90],
    [80, 82],
    [95, 90],

    [5, 78],
    [5, 14],
    [88, 32],
    [55, 10],
  ];

  items.forEach((item, index) => {
    const [xPercent, yPercent] = positions[index % positions.length];

    gsap.set(item, {
      left: `${xPercent}%`,
      top: `${yPercent}%`,
      xPercent: -50,
      yPercent: -50,
      x: 0,
      y: 0,
      rotation: gsap.utils.random(-3, 3),
    });
  });

  container.value.addEventListener("mousemove", handleMouseMove);
  container.value.addEventListener("mouseleave", handleMouseLeave);
});

onBeforeUnmount(() => {
  container.value?.removeEventListener("mousemove", handleMouseMove);
  container.value?.removeEventListener("mouseleave", handleMouseLeave);
});
</script>

<style>
.tech-item {
  will-change: transform;
}

.spin-animation {
  animation: spin 60s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.spin-animation-reverse {
  animation: spin-reverse 60s linear infinite;
}

@keyframes spin-reverse {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
}
</style>