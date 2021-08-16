<template>
  <Main />
</template>

<script>
import { mapGetters } from 'vuex'
import Main from '@/components/Blog/Main/Main'
import { getMetadata, buildHead } from '@/data/seo'

export default {
  name: 'Blog',
  components: {
    Main,
  },

  nuxtI18n: false,

  async asyncData({ store, error }) {
    try {
      await store.dispatch('getHomePageContent')
      return {}
    } catch (e) {
      // Returns error page
      return error({ statusCode: 404, message: 'Page not found' })
    }
  },

  head() {
    return buildHead({
      ...getMetadata('blog'),
      description: this.homePageContent.description || '',
      image: 'https://maddevs.io/blog.png',
    })
  },

  computed: {
    ...mapGetters(['homePageContent']),
  },
}
</script>
