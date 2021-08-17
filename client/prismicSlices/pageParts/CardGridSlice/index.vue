<template>
  <section class="text-slice">
    <div class="container">
      <CardGrid
        v-if="slice.variation === 'default-slice'"
        v-bind="slice.primary"
      />
      <CardGridWithList
        v-else-if="slice.variation === 'cardGridWithList'"
        v-bind="slice"
      />
    </div>
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
