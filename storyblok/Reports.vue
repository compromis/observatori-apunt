<script setup>
defineProps({ blok: Object })

const splitIntoThree = (array) => {
  const chunkSize = Math.ceil(array.length / 3)
  return array.reduce((acc, _, i) => {
    if (i % chunkSize === 0) acc.push(array.slice(i, i + chunkSize))
    return acc
  }, [])
}
</script>

<template>
  <section v-editable="blok" class="my-16">
    <h2 class="font-headline uppercase text-2xl text-center text-balance mb-6">
      {{ blok.heading }}
    </h2>
    <div class="grid lg:grid-cols-3 gap-site">
      <div
        v-for="(reports, index) in splitIntoThree(blok.reports)"
        :key="index"
        class="flex flex-col gap-site"
      >
        <StoryblokComponent
          v-for="report in reports"
          :key="report._uid"
          :blok="report"
        />
      </div>
    </div>
  </section>
</template>
