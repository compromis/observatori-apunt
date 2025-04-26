<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const scrolled = ref(false)

onMounted(() => {
  document.addEventListener('scroll', () => {
    const chart = document.querySelector('.rent-chart')
    const scrollY = window.scrollY
    const threshold = chart?.offsetTop
    scrolled.value = scrollY > threshold
  })
})
</script>

<template>
  <div class="observatori-header">
    <nav :class="['observatori-nav', { scrolled }]">
      <div class="flex gap-site w-full md:w-auto justify-between">
        <a href="https://compromis.net" aria-label="Compromís" class="logo compromis">
          <SiteLogo />
        </a>
      </div>
      <div class="observatori-languages flex">
        <a
          v-for="lang in locales"
          :key="lang.code"
          :href="switchLocalePath(lang.code)"
          aria-label="Idioma"
          :class="{ 'current': locale === lang.code }"
          :aria-current="locale === lang.code ? 'page' : null"
        >
          {{ lang.name }}
        </a>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.observatori {
  &-nav {
    position: fixed;
    display: flex;
    align-items: center;
    padding: 1rem var(--spacing-site);
    justify-content: space-between;
    left: 0;
    top: 0;
    right: 0;
    z-index: 1100;

    .logo {
      display: flex;
      align-items: center;
      color: var(--color-white);
      gap: 1rem;
      text-decoration: none;

      svg {
        height: 2.25rem;
      }

      &.compromis svg {
        height: 1.6rem;
      }
    }
  }

  &-languages {
    gap: var(--spacing-site);

    :deep(a) {
      color: var(--color-white);
      font-size: 1.1rem;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        text-underline-offset: 4px;
      }

      &.current {
        font-weight: 900;
      }
    }
  }

  &-header {
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 6rem;
      pointer-events: none;
      background: linear-gradient(to bottom, rgba(2, 17, 27, .6), rgba(2, 17, 27, 0));
      z-index: 1000;
    }
  }
}

@media (max-width: 46rem) {
  .pax {
    &-nav {
      position: relative;
      flex-direction: column;

      .logo {
        svg {
          height: 1.75rem;
        }

        &.compromis svg {
          height: 1.25rem;
        }
      }
    }
  }
}
</style>
