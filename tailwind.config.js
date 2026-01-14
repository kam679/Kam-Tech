/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./screens/**/*.{js,ts,jsx,tsx}",
        "./services/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#6366f1', // Indigo 500
                    dark: '#4f46e5',   // Indigo 600
                },
                surface: {
                    light: '#ffffff',
                    dark: '#1e293b',   // Slate 800
                },
                background: {
                    light: '#f8fafc',  // Slate 50
                    dark: '#0f172a',   // Slate 900
                }
            },
            fontFamily: {
                display: ['Inter', 'sans-serif'],
            },
            padding: {
                'safe': 'env(safe-area-inset-bottom)',
            }
        },
    },
    plugins: [],
    darkMode: 'media', // or 'class'
}
