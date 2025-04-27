<script setup>
const props = defineProps({ blok: Object })
const { locale, t } = useI18n()

/* Url and text */
const url = computed(() => {
  return 'https://observatoriapunt.com'
})

const text = computed(() => {
  return encodeURIComponent(props.blok.share_text)
})

const urlAndText = computed(() => {
  return `${text.value} ${url.value}`
})

/* Share dialog */
const payload = {
  title: props.blok.share_title,
  text: text.value,
  url: url.value,
  image: props.blok.share_image
}

const canShare = computed(() => window && window.navigator.share)
const share = async () => {
  if (canShare.value) {
    await navigator.share(payload)
  }
}
</script>

<template>
  <section class="pt-28 pb-0 lg:py-24 max-w-[800px] mx-auto">
    <div class="text-white">
      <div class="border-2 border-white overflow-clip">
        <div class="py-site px-8 border-b-2 border-white">
          <h2 class="font-extrabold text-lg">{{ blok.heading }}</h2>
          <p class="text-base">{{ blok.text }}</p>
        </div>
        <div class="buttons grid md:grid-cols-2">
          <a :href="`https://wa.me/?text=${urlAndText}`" class="md:border-r-2 border-b-2 border-white">
            <span>-&gt;</span> WhatsApp
          </a>
          <a :href="`https://t.me/share/url?url=${urlAndText}`" class="border-b-2 border-white">
            <span>-&gt;</span> Telegram
          </a>
          <a :href="`https://x.com/intent/post/?text=${text}&url=${url}.com&hashtags=`" class="md:border-r-2 border-b-2 md:border-b-0 border-white">
            <span>-&gt;</span> X / Twitter
          </a>
          <a v-if="canShare" href="#" @click.prevent="share">
            <span>-&gt;</span> {{ $t('share.other') }}
          </a>
          <a v-else :href="`https://www.facebook.com/sharer/sharer.php?u=${url}`">
            <span>-&gt;</span> Facebook
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.buttons a {
  padding: 1.5rem;
  font-size: var(--text-lg);
  color: var(--color-white);
  display: flex;
  gap: .5em;
  transition: .5s ease;

  span {
    max-width: 0;
    overflow: clip;
    transition: .5s ease;
    white-space: nowrap;
    color: var(--color-black);
  }

  &:hover {
    background: var(--color-white);
    color: var(--color-black);
    text-decoration: none;

    span {
      max-width: 2em;
    }
  }
}
</style>