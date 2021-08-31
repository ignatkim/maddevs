<template>
  <section class="card-grid-main">
    <CardGrid
      v-if="slice.variation === 'default-slice'"
      v-bind="slice"
    />
    <CardGridWithList
      v-else-if="slice.variation === 'cardGridWithList'"
      v-bind="slice"
    />
    <CardGridWithIcon
      v-else-if="slice.variation === 'cardGridWithIcon'"
      v-bind="slice.primary"
      :items="slice.items"
    />
    <RichTextCards
      v-else-if="slice.variation === 'richTextCards'"
      v-bind="slice.primary"
      :items="slice.items"
    />
  </section>
</template>

<script>
import CardGrid from './variations/CardGrid'
import CardGridWithList from './variations/CardGridWithList'
import CardGridWithIcon from './variations/CardGridWithIcon'
import RichTextCards from './variations/RichTextCards'

export default {
  name: 'CardGridMain',
  components: {
    CardGrid,
    CardGridWithList,
    CardGridWithIcon,
    RichTextCards,
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
