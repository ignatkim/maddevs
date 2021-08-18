<template>
  <main class="main">
    <SliceZone
      type="custom_page"
      uid="demo-about-page"
    />
  </main>
</template>

<script>
import SliceZone from 'vue-slicezone'
import featureFlag from '@/featureFlags/featureFlag'

export default {
  name: 'About',
  components: {
    SliceZone,
  },

  asyncData({ error }) {
    if (!featureFlag('aboutPageDemo')) return error({ statusCode: 404, message: 'Page not found' })
    return {}
  },
}
</script>
