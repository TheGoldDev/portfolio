import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',

    devtools: { enabled: true },

    modules: [
        '@nuxtjs/seo',
        [
            '@nuxtjs/google-fonts',
            {
                families: {
                    Inter: {
                        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
                        ital: [100, 200, 300, 400],
                    },

                    'Instrument Serif': {
                        wght: [400],
                        ital: [400],
                    },
                },

                display: 'swap',
                subsets: 'latin',

                download: true,
                overwriting: true,

                fontsDir: 'assets/fonts',
                stylePath: 'assets/css/font-variable.css',
            },
        ],
    ],

    css: ['~/assets/css/font-variable.css', '~/assets/css/main.css'],

    vite: {
        plugins: [tailwindcss()],
    },
});
