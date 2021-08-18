<template>
  <SliceZone
    type="page"
    :slices="slices"
  />
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  components: {
    SliceZone,
  },

  async asyncData({ error, params, $prismic }) {
    const response = await $prismic.api.getByUID('custom_page', params.uid)
    if (!response.data.released && process.env.ffEnvironment === 'production') {
      return error({ statusCode: 404, message: 'Page not found' })
    }
    return {
      slices: response.data.body,
    }
  },
}
</script>
