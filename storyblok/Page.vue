<script setup>
defineProps({ blok: Object })
</script>

<template>
  <main v-editable="blok" class="max-w-[2000px] mx-auto p-site md:p-12">
    <StoryblokComponent
      v-for="component in blok.body"
      :key="component._uid"
      :blok="component"
    />
  </main>
</template>
