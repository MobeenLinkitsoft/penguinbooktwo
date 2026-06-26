import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      colors: {
        // Keeps your brand object for custom use
        brand: {
          orange: "#FF6B00",
          textDark: "#1A1A1A",
          textGray: "#666666",
          bgDark: "#2A2A2A",   
          bgLight: "#F8F9FA", 
        },
        // Overwrites the default tailwind orange/slate used in my code with YOUR exact hex codes!
        orange: {
          500: "#FF6B00", // Makes text-yellow-500 your brand orange
          600: "#FF6B00", // Makes bg-yellow-600 your brand orange
          700: "#E56000", // A slightly darker shade for hover states
        },
        slate: {
          50: "#F8F9FA",  // Matches your bgLight
          500: "#666666", // Matches your textGray
          800: "#2A2A2A", // Matches your bgDark
          900: "#1A1A1A", // Matches your textDark
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;