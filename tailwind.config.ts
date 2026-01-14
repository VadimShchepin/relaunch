import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['General Sans', 'sans-serif'],
            },
            colors: {
                brand: {
                    bg: '#FBF9F7',
                    text: '#111111',
                    accent: '#4FAF8C',
                    dark: '#1C1917',
                    olive: '#9CA38A', // Muted Olive
                    slate: '#7D8C9E', // Dark Grey/Blue
                    orange: '#FF5E3A', // Vibrant Orange
                    pink: '#E6A5A5', // Nexus Card Pink
                }
            },
            borderRadius: {
                section: "1.5rem",
                card: "1rem",
            },
            animation: {
                'fade-in-up': 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },

    plugins: [],
};
export default config;
