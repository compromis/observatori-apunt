<script setup>
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

useHead({
  htmlAttrs: { lang: head.value.htmlAttrs.lang, dir: head.value.htmlAttrs.dir, class: 'bg-black text-white' },
  meta: [
    { name: 'theme-color', content: '#000' },
    { name: 'msapplication-TileColor', content: '#000' },
    { name: 'apple-mobile-web-app-title', content: 'Observatori Apunt' },
    ...head.value.meta
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicons/favicon-96x96.png', sizes: '96x96' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicons/favicon.svg' },
    { rel: 'shortcut icon', href: '/favicons/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
    { rel: 'manifest', href: '/favicons/site.webmanifest' },
    { rel: 'stylesheet', href: 'https://compromis.net/sub/fonts/manrope.css?variable' },
    ...head.value.link
  ],
  script: [
    // { src: 'https://cloud.umami.is/script.js', 'data-website-id': '', defer: true }
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