<script setup>
const props = defineProps({ blok: Object })
const tag = computed(() => props.blok.url ? 'a' : 'div')
</script>

<template>
  <li v-editable="blok" :class="['flex', { 'md:col-span-2': blok.colspan == 2, 'md:col-span-3': blok.colspan == 3 }]">
    <Component :is="tag" :href="blok.url" class="flex flex-col gap-2 text-black bg-white p-site w-full h-full">
      <div v-if="blok.show_logo">
        <img src="~/assets/images/apunt.svg" alt="À Punt" class="h-10" />
      </div>
      <h3 v-if="blok.headline" class="font-apunt font-bold text-xl leading-[1.1]">
        {{ blok.headline }}
      </h3>
      <div v-if="blok.text" class="text-md font-medium">
        <UtilsRichText :content="blok.text" />
      </div>
    </Component>
  </li>
</template>
