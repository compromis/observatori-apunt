<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" class="my-16">
    <h2 class="font-headline uppercase text-2xl text-center text-balance mb-6">
      {{ blok.heading }}
    </h2>
    <ul class="grid grid-cols-3 gap-site">
      <StoryblokComponent
        v-for="report in blok.reports"
        :key="report._uid"
        :blok="report"
      />
    </ul>
  </section>
</template>
