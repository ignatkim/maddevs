<template>
  <section
    class="title-slice"
    :class="colorThemeClass"
  >
    <div
      class="container"
      :style="{ maxWidth: slice.primary.maxWidth }"
    >
      <TitleH2
        v-if="slice.variation === 'default-slice'"
        v-bind="slice.primary"
      />
      <TitleH3
        v-else-if="slice.variation === 'title-h3'"
        v-bind="slice.primary"
      />
    </div>
  </section>
</template>

<script>
import TitleH2 from './variations/TitleH2'
import TitleH3 from './variations/TitleH3'

export default {
  name: 'TitleSlice',
  components: {
    TitleH2,
    TitleH3,
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

  computed: {
    colorThemeClass() {
      if (this.slice?.primary?.colorTheme === 'white') return 'title-slice--white-theme'
      return 'title-slice--black-theme'
    },
  },
}
</script>

<style lang="scss" scoped>
  .title-slice {
    &--white-theme {
      background-color: $bgcolor--white-primary;
      color: $text-color--black-lighter;
    }
    &--black-theme {
      background-color: $bgcolor--black;
      color: $text-color--white;
    }
  }
</style>
