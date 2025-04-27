<script setup>
import { animate, utils, onScroll, stagger } from 'animejs'

const props = defineProps({ blok: Object })

const chunkSize = computed(() => Math.ceil(props.blok.reports.length / 3))
const reportColumns = computed(() => {
  return props.blok.reports.reduce((acc, _, i) => {
    if (i % chunkSize.value === 0) acc.push(props.blok.reports.slice(i, i + chunkSize.value))
    return acc
  }, [])
})

/* Animations */
const section = ref(null)
onMounted(() => {
  animate('.animate-block', {
    opacity: [0, 1],
    translateY: [20, 0],
    delay: stagger(200, { grid: [3, chunkSize.value]}),
    autoplay: onScroll({
      targets: section.value,
      enter: '60% top',
    }),
  })
})
</script>

<template>
  <section v-editable="blok" class="my-16" ref="section">
    <h2 class="font-headline uppercase text-2xl text-center text-balance mb-6">
      <UtilsBlinker>{{ blok.heading }}</UtilsBlinker>
    </h2>
    <div class="grid lg:grid-cols-3 gap-8">
      <div
        v-for="(reports, index) in reportColumns"
        :key="index"
        class="flex flex-col gap-8"
      >
        <StoryblokComponent
          v-for="report in reports"
          :key="report._uid"
          :blok="report"
          class="animate-block"
        />
      </div>
    </div>
  </section>
</template>
