<template>
  <main class="main">
    <Privacy />
  </main>
</template>

<script>
import Privacy from '@/components/core/Privacy'
import { getMetadata, buildHead } from '@/data/seo'

export default {
  name: 'MainPrivacy',
  components: {
    Privacy,
  },

  head() {
    return buildHead(getMetadata('privacy'))
  },
}
</script>
