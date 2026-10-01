import { ref, onMounted, onBeforeUnmount } from "vue";

export const useDevice = () => {
    const isMobile = ref(false);
    const isDesktop = ref(false);

    const checkDevice = () => {
        const mobile = window.innerWidth < 768;

        isMobile.value = mobile;
        isDesktop.value = !mobile;
    };

    onMounted(() => {
        checkDevice();

        window.addEventListener("resize", checkDevice);
    });

    onBeforeUnmount(() => {
        window.removeEventListener("resize", checkDevice);
    });

    return {
        isMobile,
        isDesktop,
    };
};