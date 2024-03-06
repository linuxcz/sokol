import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default <Partial<Config>> {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tyrs', ...fontFamily.sans],
        decorative: ['SokolFugner', ...fontFamily.sans],
      },
      colors: {
        red: {
          DEFAULT: '#E40521', // Tady měníte hodnotu bg-red-600
          500: '#E40521',
        },
      },
    },
  },
}
