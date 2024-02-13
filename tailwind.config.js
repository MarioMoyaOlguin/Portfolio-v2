/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'moving-bg': 'background 10s ease-in-out infinite alternate',
        'bg-slide': 'slide 8s ease-in-out infinite alternate',
        'bg-slide-rev': 'slideRev 12s ease-in-out infinite alternate',
        'slide-chevron': 'slideChevron 1s ease-in-out infinite ',
        'slide-up-chevron': 'slideUpChevron 1s linear infinite ',
        'slide-text': 'slideText 0.5s linear',
        'slide-text-delayd': 'slideTextDelayd 2s linear',
      },
      keyframes: {
        background: {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '100% 50%' },
        },
        slide: {
          '0%': { 'transform': 'translateX(-25%)' },
          '100%': { 'transform': 'translateX(25%)' }
        },
        slideRev: {
          '0%': { 'transform': 'translateX(25%)' },
          '100%': { 'transform': 'translateX(-25%)' }
        },
        slideChevron: {
          '0%': { 'transform': '' },
          '100%': { 'transform': 'translateY(0px)' }
        },
        slideUpChevron: {
          '0%': { 'transform': '' },
          '100%': { 'transform': 'translateY(-50%)' }
        },
        slideText: {
          '0%': { 'opacity': '0', 'transform': 'translateY(-16px)' },
          '100%': { 'opacity': '1', 'transform': 'translateY(0px)' }
        },
        slideTextDelayd: {
          '0%': { 'opacity': '0', 'transform': 'translateY(-16px)' },
          '75%': { 'opacity': '0', 'transform': 'translateY(-16px)' },
          '100%': { 'opacity': '1', 'transform': 'translateY(0px)' }
        },
      },
    },
    screens: {
      'sm': '640px', // => @media (min-width: 640px)
      'md': '768px', // => @media (min-width: 768px)
      'lg': '1024px', // => @media (min-width: 1024px)
      'xl': '1280px', // => @media (min-width: 1280px)
      '2xl': '1536px', // => @media (min-width: 1536px)
      '3xl': '2240px', // => @media (min-width: 2240px)
    }, 
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('tailwind-scrollbar'),
  ],
}
