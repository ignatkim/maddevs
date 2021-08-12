<template>
  <main class="main">
    <Main />
  </main>
</template>

<script>
import Main from '@/components/Careers/Main'
import { getMetadata, buildHead } from '@/data/seo'

export default {
  name: 'MainCareers',
  components: {
    Main,
  },

  head() {
    return {
      ...buildHead(
        { ...getMetadata('careers'), url: `https://maddevs.io${this.$route.path}` }, // meta tags
        [], // scripts
        [
          { rel: 'alternate', hreflang: 'en', href: 'https://maddevs.io/careers/' },
          { rel: 'alternate', hreflang: 'x-default', href: 'https://maddevs.io/careers/' },
          { rel: 'alternate', hreflang: 'ru', href: 'https://maddevs.io/ru/careers/' },
        ], // links
      ),

      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    }
  },
}
</script>
