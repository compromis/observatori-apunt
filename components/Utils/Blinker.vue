<script setup>
import { animate, onScroll } from 'animejs'

const props = defineProps({ immediate: { type: Boolean, default: false } })

const target = ref(null)
let animation

onMounted(() => {
  if (props.immediate) {
    blink()
  } else {
    animation = animate(target.value, {
      autoplay: onScroll({
        onEnter: () => blink(),
        enter: '60% top'
      }),
    })
  }
})

const blinking = ref(true)
const times = ref(0)
let interval

function blink() {
  interval = setInterval(() => {
    if (times.value > 3) {
      clearInterval(interval)
      animation && animation.cancel()
      animation = null
    }
    blinking.value = !blinking.value
    times.value++
  }, 500)
}
</script>

<template>
  <span :class="{'opacity-0': blinking }" ref="target">
    <slot />
  </span>
</template>

<style>

</style>