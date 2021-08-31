<template>
  <section class="contacts-slice">
    <FirstVariation
      v-if="slice.variation === 'default-slice'"
      v-bind="slice"
    />
  </section>
</template>

<script>
import FirstVariation from './variations/FirstVariation'

export default {
  name: 'ContactsSlice',
  components: {
    FirstVariation,
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
