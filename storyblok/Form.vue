<script setup>
defineProps({ blok: Object })

useHead({
  script: [
    { src: 'https://server.fillout.com/embed/v1/' }
  ]
})
</script>

<template>
  <section v-editable="blok" class="form p-site max-w-[1000px] mx-auto flex flex-col gap-site items-center justify-center text-center font-medium">
    <UtilsRichText :content="blok.text" class="text-md" />
    <div v-html="blok.embed" />
  </section>
</template>

<style lang="scss">
.form {
  button {
    font-size: var(--text-lg) !important;
    padding: .5em .75em !important;
    border-radius: 0 !important;
    font-family: var(--font-sans) !important;
    line-height: 1.1;
    font-weight: 900;
  }
}
</style>