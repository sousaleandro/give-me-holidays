/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,js,jsx}"
];
export const theme = {
  extend: {
    fontFamily: {
      epilogue: ['Epilogue', 'sans-serif'],
    }
  },
  screen: {
    sm: '394px',
    md: '760px',
    lg: '1024px',
  },
};
export const plugins = [];