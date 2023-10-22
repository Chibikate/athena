module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media', // Enable dark mode utilities
  theme: {
    extend: {
      colors: {
        primary: "#001524",
        dark: "#333", // Define dark mode background color
      },
      textColor: {
        dark: "#fff", // Define dark mode text color
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite', // Adjust the duration (5s) for the desired speed
        'bounce-in-left': 'bounce-in-left 1s ease-out',
      },
    },
  },
  darkMode: 'class', 
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },

  },
  plugins: [],
};
