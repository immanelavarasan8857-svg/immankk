/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background palette
        bg: {
          base: '#080c17',
          panel: '#0d1526',
          elevated: '#111d35',
          border: '#1a2a4a',
          hover: '#162040',
        },
        // Accent palette
        accent: {
          cyan: '#00d4ff',
          'cyan-dim': '#0099bb',
          blue: '#2563eb',
          'blue-dim': '#1e4db7',
        },
        // Status palette
        critical: '#ef4444',
        'critical-dim': '#7f1d1d',
        high: '#f97316',
        'high-dim': '#7c2d12',
        warning: '#f59e0b',
        'warning-dim': '#78350f',
        medium: '#eab308',
        safe: '#22c55e',
        'safe-dim': '#14532d',
        info: '#3b82f6',
        // AI/Intelligence
        purple: '#a855f7',
        'purple-dim': '#581c87',
        // Text
        'text-primary': '#e2e8f0',
        'text-secondary': '#94a3b8',
        'text-muted': '#64748b',
        'text-disabled': '#334155',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.015'%3E%3Cpath d='M0 0h1v40H0zm39 0h1v40h-1zM0 0v1h40V0zM0 39v1h40v-1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      },
      boxShadow: {
        'panel': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'glow-cyan': '0 0 20px rgba(0, 212, 255, 0.15)',
        'glow-red': '0 0 20px rgba(239, 68, 68, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'counter': 'counterUp 1.5s ease-out forwards',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
