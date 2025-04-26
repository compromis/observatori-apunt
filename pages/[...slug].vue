<script setup>
const { locale } = useI18n()
const version = useEnvironment()
const { slug } = useRoute().params
const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join('/') : 'home',
  { version, language: locale.value === 'val' ? 'ca' : 'es' }
)
const page = story?.value?.content

/* SEO Metatags */
const title = page.title || page.name
const ogTitle = title
const description = page.description
const ogImage = page.picture.filename
const keywords = page.keywords
const twitterSite = 'compromis'
useServerSeoMeta({
  title,
  ogTitle,
  description,
  ogDescription: description,
  ogImage,
  twitterCard: 'summary_large_image',
  keywords,
  ogSiteName: title,
  twitterSite,
  ogType: 'website'
})

useHead({ title })
</script>

<template>
  <StoryblokComponent
    v-if="story"
    :blok="story.content"
  />
</template>
