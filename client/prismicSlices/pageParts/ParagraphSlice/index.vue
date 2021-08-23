<template>
  <section
    class="paragraph-slice"
    :class="colorThemeClass"
  >
    <div
      class="container"
      :style="{ maxWidth: slice.primary.maxWidth }"
    >
      <ParagraphSM
        v-if="slice.variation === 'default-slice'"
        v-bind="slice.primary"
      />
      <ParagraphLG
        v-else-if="slice.variation === 'paragraphLg'"
        v-bind="slice.primary"
      />
    </div>
  </section>
</template>

<script>
import ParagraphSM from './variations/ParagraphSM'
import ParagraphLG from './variations/ParagraphLG'

export default {
  name: 'ParagraphSlice',
  components: {
    ParagraphSM,
    ParagraphLG,
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
      if (this.slice?.primary?.colorTheme === 'white') return 'paragraph-slice--white-theme'
      return 'paragraph-slice--black-theme'
    },
  },
}
</script>

<style lang="scss" scoped>
  .paragraph-slice {
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
