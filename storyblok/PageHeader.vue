<script setup>
import { animate, utils, onScroll, createTimeline } from 'animejs'

defineProps({ blok: Object })

</script>

<template>
  <header v-editable="blok" class="pt-[10vh] max-w-[1400px] mx-auto">
    <h1 class="page-title font-headline uppercase text-2xl md:text-5xl text-balance text-center">
      <UtilsBlinker immediate>{{ blok.title }}</UtilsBlinker>
    </h1>
    <div class="intro-columns">
      <UtilsRichText :content="blok.intro" class="my-12 font-medium text-md text-balance -tracking-[.03em]" />
    </div>
  </header>
</template>

<style lang="scss">
.intro-columns {
  p {
    max-width: 60ch;
    margin-inline: auto;
  }

  ul {
    display: flex;
    gap: var(--spacing-site);
    margin-top: 3rem;
    text-align: left;
  }

  li {
    display: flex;
    gap: 1em;

    &::before {
      content: '→';
      font-family: var(--font-headline);
      font-size: 2em;
      line-height: .75;
    }

    b {
      color: var(--color-yellow);
      font-weight: 900;
    }

    a {
      text-decoration: underline;
      color: var(--color-yellow);
    }
  }
}

@media (max-width: 48rem) {
  .intro-columns {
    ul {
      flex-direction: column;
      gap: 1em;
    }
  }
}
</style>
