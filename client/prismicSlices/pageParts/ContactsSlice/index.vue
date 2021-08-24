<template>
  <section
    id="contacts-slice"
    class="contacts-slice"
  >
    <FirstVariation v-if="slice.variation === 'default-slice'" />
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
