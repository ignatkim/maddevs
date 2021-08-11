<template>
  <section class="text-slice">
    <TextVariation
      v-if="slice.variation === 'default-slice'"
      v-bind="slice.primary"
    />
    <TitleVariation
      v-else-if="slice.variation === 'title'"
      v-bind="slice.primary"
    />
    <TitleTextVariation
      v-else-if="slice.variation === 'titleText'"
      v-bind="slice.primary"
    />
    <TitleTextButtonVariation
      v-else-if="slice.variation === 'titleTextButton'"
      v-bind="slice.primary"
    />
    <TitleTextListVariation
      v-else-if="slice.variation === 'titleTextList'"
      v-bind="slice.primary"
      :list="slice.items"
    />
  </section>
</template>

<script>
import TitleVariation from './variations/TitleVariation'
import TextVariation from './variations/TextVariation'
import TitleTextVariation from './variations/TitleTextVariation'
import TitleTextButtonVariation from './variations/TitleTextButtonVariation'
import TitleTextListVariation from './variations/TitleTextListVariation'

export default {
  name: 'TextSlice',
  components: {
    TitleVariation,
    TextVariation,
    TitleTextVariation,
    TitleTextButtonVariation,
    TitleTextListVariation,
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
}
</script>
