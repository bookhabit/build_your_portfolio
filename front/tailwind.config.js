/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '2xl': '0 10px 15px 2px rgba(0, 0, 0, 0.5)',
      },
      colors:{
        primary:'#F5385D',
        portfolio_gray:"#F5F5F5",
        header_element:'#FFFFFF',
        header_bg:'#000000',
        login_btn:'#000000',
        login_btn_hover:'#808080',
        login_click_btn:'#5F5959',
        login_text:'#EFEDED',
        error_fill:'#FFEFEF',
        error_stroke:'#FC3232',
        resume_input:'#BCBCBC',
        resume_card_BG:'#F5F5F5',
        portfolio_form_label:'#656262',
        category_select:'#5F9ED9',
        form_bg:'#E7E7E7',
        border_focus:'#58BA74',
      }
    },
    screens: {
      'xs': '500px',
      // => @media (min-width: 500px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}