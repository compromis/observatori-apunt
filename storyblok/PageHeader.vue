<script setup>
defineProps({ blok: Object })
</script>

<template>
  <header v-editable="blok" class="pt-[10vh] text-center max-w-[1400px] mx-auto">
    <h1 class="font-headline uppercase text-5xl text-balance">
      {{ blok.title }}
    </h1>
    <UtilsRichText :content="blok.intro" class="my-12 font-medium text-md max-w-[60ch] text-balance mx-auto -tracking-[.03em]" />
  </header>
</template>
