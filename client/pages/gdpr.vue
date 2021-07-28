<template>
  <main class="main">
    <GDPR />
  </main>
</template>

<script>
import GDPR from '@/components/core/GDPR'
import { getMetadata, buildHead } from '@/data/seo'

export default {
  name: 'MainGdpr',
  components: {
    GDPR,
  },

  head() {
    return buildHead(getMetadata('gdpr'))
  },
}
</script>
