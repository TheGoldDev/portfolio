<template>
    <div
        class="w-100 h-100 absolute border border-dashed border-[#2B52FF] rounded-full opacity-30 spin-animation"
    />

    <div
        class="w-60 h-60 absolute border border-dashed border-[#121212] rounded-full opacity-30 spin-animation-reverse"
    />
</template>

<style scoped>
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