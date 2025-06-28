/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white_color: "var(--white_color)",
        blue_color: "var(--blue_color)",
        TextPrimary_color: "var (--TextPrimary_color)",
        gray_text_color: "var (--gray_text_color)",
        
      },

      fontFamily: {
        Poppins: "var(--Poppins)",
        Montserrat: "var(--Montserrat)",
        Roboto: "var(--Roboto)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
