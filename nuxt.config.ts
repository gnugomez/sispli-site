// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  modules: ['@nuxt/image', '@vueuse/nuxt', '@nuxtjs/google-fonts'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  googleFonts: {
    families: {
      Inconsolata: true,
    },
  },

  compatibilityDate: '2024-11-11',
})
