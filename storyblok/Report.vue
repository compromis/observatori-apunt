<script setup>
const props = defineProps({ blok: Object })
const { hasRichText } = useUtils()
const tag = computed(() => props.blok.url ? 'a' : 'div')
const colors = ['red', 'green', 'blue', 'yellow']
const randColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length)
  return colors[randomIndex]
}
</script>

<template>
  <article
    v-editable="blok"
    class="shadow-color"
    :style="{
      '--color': `var(--color-${randColor()}-shadow)`,
    }"
  >
    <Component
      :is="tag"
      :href="blok.url"
      class="flex flex-col gap-2 text-black bg-white p-site w-full"
    >
      <div v-if="blok.show_logo">
        <img src="~/assets/images/apunt.svg" alt="À Punt" class="h-10" />
      </div>
      <h3 v-if="blok.headline" class="font-apunt font-bold text-xl leading-[1.1] text-balance">
        {{ blok.headline }}
      </h3>
      <div v-if="blok.text" class="text-md font-medium">
        <UtilsRichText :content="blok.text" />
      </div>
    </Component>
    <div
      v-if="hasRichText(blok.comment)"
      class="
      relative bg-yellow font-extrabold py-3 px-site text-base text-black
      before:content-[''] before:block before:absolute before:w-8 before:h-8 before:rotate-45 before:bg-yellow before:-top-2 before:left-site before-z-[2]"
    >
      <UtilsRichText :content="blok.comment" class="relative z-[4]" />
    </div>
  </article>
</template>
