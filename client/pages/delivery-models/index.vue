<template>
  <main class="main">
    <Main />
  </main>
</template>

<script>
import Main from '@/components/DeliveryModels/Main'
import { getMetadata, buildHead } from '@/data/seo'

export default {
  name: 'DeliveryModels',
  components: {
    Main,
  },

  nuxtI18n: false,

  head() {
    return buildHead(getMetadata('delivery-models'))
  },
}
</script>
