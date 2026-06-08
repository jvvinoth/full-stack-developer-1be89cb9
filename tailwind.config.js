/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',      // slate-900
        secondary: '#1E40AF',    // blue-800
        accent: '#0EA5E9',       // sky-500
        background: '#FFFFFF',   // white
        surface: '#F8FAFC',      // slate-50
        text: '#1E293B',         // slate-800
        'text-muted': '#64748B', // slate-500
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
