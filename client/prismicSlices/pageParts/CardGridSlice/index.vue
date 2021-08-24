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
  </section>
</template>

<script>
import CardGrid from './variations/CardGrid'
import CardGridWithList from './variations/CardGridWithList'

export default {
  name: 'CardGridMain',
  components: {
    CardGrid,
    CardGridWithList,
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
