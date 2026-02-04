module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: ["Inter", "sans-serif"],
            display: ["Playfair Display", "serif"],
        },
        extend: {
            colors: {
                offwhite: "#fafafa",
                softgray: "#f5f5f5",
                lightgray: "#e5e5e5",
                gray: "#8a8a8a",
                darkgray: "#4a4a4a",
                black: "#1a1a1a",
                accent: "#6b7280",
            },
            spacing: {
                "18": "4.5rem",
                "22": "5.5rem",
                "26": "6.5rem",
                "30": "7.5rem",
            },
            transitionDuration: {
                2500: "2500ms",
            },
        },
    },
    plugins: [],
};
