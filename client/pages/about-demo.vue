<template>
  <SliceZone
    type="custom_page"
    uid="demo-about-page"
  />
</template>

<script>
import SliceZone from 'vue-slicezone'
import featureFlag from '@/featureFlags/featureFlag'

export default {
  name: 'About',
  components: {
    SliceZone,
  },

  asyncData({ params, error }) {
    if (!featureFlag('aboutPageDemo') || params.uid !== 'demo-about-page') return error({ statusCode: 404, message: 'Page not found' })
    return {}
  },
}
</script>
