<template>
  <section
    class="key-metrics-slice"
    :class="colorThemeClass"
  >
    <div class="container">
      <WithLeftTitle
        v-if="slice.variation === 'default-slice'"
        v-bind="slice.primary"
        :metrics="slice.items"
      />
      <WithTopTitle
        v-else-if="slice.variation === 'withTopTitle'"
        v-bind="slice.primary"
        :metrics="slice.items"
      />
    </div>
  </section>
</template>

<script>
import WithLeftTitle from './variations/WithLeftTitle'
import WithTopTitle from './variations/WithTopTitle'

export default {
  name: 'KeyMetricsSlice',
  components: {
    WithLeftTitle,
    WithTopTitle,
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
