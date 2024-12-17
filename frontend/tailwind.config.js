const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/components/(card|ripple).js",
    ],
    theme: {
        extend: {
            fontFamily: {
                khand: ["var(--font-khand)"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            dropShadow: {
                glow: [
                    "0 0px 20px rgba(255, 255, 255, 0.35)",
                    "0 0px 65px rgba(255, 255, 255, 0.2)",
                ],
            },
        },
    },
    plugins: [nextui()],
};
