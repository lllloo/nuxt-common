// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/index.css'],
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
  ],
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  // https://github.com/unovue/shadcn-vue/issues/291#issuecomment-1901788144
  typescript: {
    tsConfig: {
      compilerOptions: {
        baseUrl: '.',
      },
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  components: [{ path: '~/components/card', pathPrefix: false }, '~/components'],
})
