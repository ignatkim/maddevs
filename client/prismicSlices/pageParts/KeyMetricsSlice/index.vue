<template>
  <section
    class="key-metrics-slice"
    :class="colorThemeClass"
  >
    <div class="container">
      <FirstVariation
        v-if="slice.variation === 'default-slice'"
        v-bind="slice.primary"
        :metrics="slice.items"
      />
      <SecondVariation
        v-else-if="slice.variation === 'secondVariation'"
        v-bind="slice.primary"
        :metrics="slice.items"
      />
      <ThirdVariation
        v-else-if="slice.variation === 'thirdVariation'"
        v-bind="slice.primary"
        :metrics="slice.items"
      />
    </div>
  </section>
</template>

<script>
import FirstVariation from './variations/FirstVariation'
import SecondVariation from './variations/SecondVariation'
import ThirdVariation from './variations/ThirdVariation'

export default {
  name: 'KeyMetricsSlice',
  components: {
    FirstVariation,
    SecondVariation,
    ThirdVariation,
  },

  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },

  data() {
    return {
      colorTheme: this.slice.primary.colorTheme,
    }
  },

  computed: {
    colorThemeClass() {
      if (this.colorTheme === 'white') return 'key-metrics-slice--white-theme'
      return 'key-metrics-slice--black-theme'
    },
  },
}
</script>

<style lang="scss" scoped>
.key-metrics-slice {
  &--black-theme {
    /deep/ .key-metric {
      background-color: $bgcolor--black-pale;
      color: $text-color--white-primary;
    }
  }
  &--white-theme {
    /deep/ .key-metric {
      background-color: $bgcolor--silver;
      color: $text-color--black-oil;
    }
  }
}
</style>
