<template>
  <section
    class="key-metrics-slice"
    :style="{ backgroundColor: sliceBackground }"
  >
    <div class="container">
      <FirstVariation
        v-if="slice.variation === 'default-slice'"
        v-bind="slice.primary"
        :metrics="slice.items"
        :data-aos="slice.primary.animation"
      />
      <SecondVariation
        v-else-if="slice.variation === 'secondVariation'"
        v-bind="slice.primary"
        :metrics="slice.items"
        :data-aos="slice.primary.animation"
      />
      <ThirdVariation
        v-else-if="slice.variation === 'thirdVariation'"
        v-bind="slice.primary"
        :metrics="slice.items"
        :data-aos="slice.primary.animation"
      />
    </div>
  </section>
</template>

<script>
import FirstVariation from './variations/FirstVariation'
import SecondVariation from './variations/SecondVariation'
import ThirdVariation from './variations/ThirdVariation'

import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'KeyMetricsSlice',
  components: {
    FirstVariation,
    SecondVariation,
    ThirdVariation,
  },

  mixins: [animateOnScrollMixin({
    offset: 200,
    delay: 50,
    anchorPlacement: 'top-center',
    duration: 1000,
    once: true,
  })],

  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },

  computed: {
    sliceBackground() {
      if (this.slice.primary.background === 'white') return '#fff'
      if (this.slice.primary.background === 'grey') return '#f5f7f9'
      return '#111213' // black
    },
  },
}
</script>
