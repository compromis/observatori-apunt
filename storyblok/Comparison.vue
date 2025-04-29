<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" class="comparison my-18 md:my-32 max-w-[1400px] mx-auto">
    <h2 class="font-headline uppercase text-2xl text-center text-balance mb-6">
      <UtilsBlinker>{{ blok.heading }}</UtilsBlinker>
    </h2>
    <div class="grid lg:grid-cols-2 gap-8 text-black text-md font-medium">
      <div class="bg-white p-5 positive shadow-yellow">
        <h3 class="font-extrabold text-lg md:flex md:items-center md:gap-2 mb-6">
          El model de <SiteLogo class="h-[1.15em]" />
        </h3>
        <UtilsRichText :content="blok.compromis" />
      </div>
      <div class="bg-white p-5 negative shadow-blue">
        <h3 class="font-extrabold text-lg mb-6">
          El model del PP
        </h3>
        <UtilsRichText :content="blok.pp" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.comparison {
  strong, b {
    font-weight: 900;
  }

  li {
    display: flex;
    gap: 1em;

    &::before {
      display: block;
      content: '';
      width: 2em;
      height: 2em;
      border-radius: 50%;
      background-color: var(--color);
      background-repeat: no-repeat;
      background-size: .75em;
      background-position: center;
      flex-shrink: 0;
    }
  }

  li:not(:last-child) {
    margin-bottom: .75em;
  }
}

.positive {
  li {
    --color: var(--color-green);

    &::before {
      background-image: url(../assets/images/positive.svg);
    }
  }
}

.negative {
  li {
    --color: var(--color-red);

    &::before {
      background-image: url(../assets/images/negative.svg);
    }
  }
}
</style>