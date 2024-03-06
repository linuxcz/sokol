// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [process.env.NUXT_UI_PRO_PATH || '@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxthq/studio',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '@hypernym/nuxt-anime',
    'nuxt-aos',
    'nuxt-marquee',
    '@nuxthq/studio'

  ],
  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter((c) => ['UButton'].includes(c.pascalName))

      globals.forEach((c) => c.global = true)
    }
  },
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  // Fonts
  css: [
    '~/assets/css/main.css',
  ],
  routeRules: {
    '/api/search.json': { prerender: true },
  },
  image: {
    caisy: {},
  },
  devtools: {
    enabled: true
  }
})
