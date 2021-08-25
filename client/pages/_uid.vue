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

  beforeRouteLeave(to, from, next) {
    this.$nuxt.$emit('showFooter', true)
    next()
  },

  async asyncData({ error, params, $prismic }) {
    const response = await $prismic.api.getByUID('custom_page', params.uid)
    if (!response?.data?.body) return error({ statusCode: 404, message: 'Page not found' })
    if (!response.data.released && process.env.ffEnvironment === 'production') {
      return error({ statusCode: 404, message: 'Page not found' })
    }
    return {
      slices: response.data.body,
      showFooter: response.data.show_footer,
    }
  },

  created() {
    this.$nuxt.$emit('showFooter', this.showFooter)
  },
}
</script>
