/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryRed: "#fc433d", // Vibrant red
        softYellow: "#ffd166", // Warm soft yellow
        brightBlue: "#2a9df4", // Complementary bright blue
        deepPurple: "#8a4fff", // Bold deep purple
      },
      backgroundImage: {
  gradientDiagonal: "linear-gradient(45deg, #fc433d, #ffd166, #2a9df4, #8a4fff)",
  gradientRadial: "radial-gradient(circle, #fc433d, #ffd166, #2a9df4, #8a4fff)",
},
    },
    screens: {
      sm: "350px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1400px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
