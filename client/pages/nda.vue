<template>
  <main class="main">
    <NDA />
  </main>
</template>

<script>
import NDA from '@/components/core/NDA'
import { getMetadata, buildHead } from '@/data/seo'

export default {
  name: 'MainNda',
  components: {
    NDA,
  },

  nuxtI18n: false,

  head() {
    return buildHead(getMetadata('nda'))
  },
}
</script>
