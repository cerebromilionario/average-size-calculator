import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          500: '#1d4ed8',
          700: '#1e3a8a'
        }
      }
    }
  },
  plugins: []
} satisfies Config;
