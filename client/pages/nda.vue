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

  head() {
    return buildHead(getMetadata('nda'))
  },
}
</script>
