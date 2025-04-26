import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: process.env.NUXT_PUBLIC_NODE_ENV === 'production' ? true : false,

  runtimeConfig: {
    public: {
      baseUrl: 'https://observatoriapunt.com',
      environment: 'preview'
    }
  },

  css: [
    '~/assets/css/main.css',
  ],

  modules: [
    ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_TOKEN }],
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/fonts',
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  i18n: {
    detectBrowserLanguage: false,
    defaultLocale: 'val',
    locales: [
      {
        code: 'val',
        language: 'ca-ES',
        name: 'Valencià',
        file: 'val.js'
      },
      {
        code: 'cas',
        language: 'es-ES',
        name: 'Castellano',
        file: 'cas.js'
      },
    ],
    baseUrl: 'https://observatoriapunt.com',
    lazy: true,
    langDir: 'lang',
  },

  image: process.env.NUXT_PUBLIC_NODE_ENV === 'production' ? {
    provider: 'netlify',
    domains: ['a.storyblok.com']
  } : {
    provider: 'storyblok',
    storyblok: {
      baseURL: 'https://a.storyblok.com'
    }
  },
})