<template>
  <section class="text-slice">
    <Title
      v-if="slice.variation === 'default-slice'"
      v-bind="slice.primary"
    />
    <Text
      v-else-if="slice.variation === 'text'"
      v-bind="slice.primary"
    />
    <TitleText
      v-else-if="slice.variation === 'titleText'"
      v-bind="slice.primary"
    />
    <TitleTextButton
      v-else-if="slice.variation === 'titleTextButton'"
      v-bind="slice.primary"
    />
    <TitleTextList
      v-else-if="slice.variation === 'titleTextList'"
      v-bind="slice.primary"
      :list="slice.items"
    />
  </section>
</template>

<script>
import Title from './variations/Title'
import Text from './variations/Text'
import TitleText from './variations/TitleText'
import TitleTextButton from './variations/TitleTextButton'
import TitleTextList from './variations/TitleTextList'

export default {
  name: 'TextSlice',
  components: {
    Title,
    Text,
    TitleText,
    TitleTextButton,
    TitleTextList,
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
