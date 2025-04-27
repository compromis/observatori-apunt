<script setup>
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

useHead({
  htmlAttrs: { lang: head.value.htmlAttrs.lang, dir: head.value.htmlAttrs.dir, class: 'bg-black text-white' },
  meta: [
    { name: 'theme-color', content: '#1b2022' },
    { name: 'msapplication-TileColor', content: '#1b2022' },
    { name: 'apple-mobile-web-app-title', content: 'Observatori Apunt' },
    ...head.value.meta
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: 'https://compromis.net/sub/icons/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://compromis.net/sub/icons/favicon32.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: 'https://compromis.net/sub/icons/favicon192.png' },
    { rel: 'stylesheet', href: 'https://compromis.net/sub/fonts/manrope.css?variable' },
    { rel: 'stylesheet', href: 'https://compromis.net/sub/fonts/manrope.css?variable' },
    ...head.value.link
  ],
  script: [
    { src: 'https://cloud.umami.is/script.js', 'data-website-id': '', defer: true }
  ]
})
</script>

<template>
  <div class="background">
    <SiteNav />
    <slot />
    <SiteFooter />
  </div>
</template>

<style scoped>
.background {
  background-image: url(../assets/images/background.png);
  background-attachment: fixed;
  background-size: cover;
}
</style>