<template>
  <div class="case_root case--godee">
    <Main />
  </div>
</template>

<script>
import Main from '@/components/Cases/godee/Main'
import { getMetadata, buildHead } from '@/data/seo'

export default {
  name: 'GoDeeCase',
  components: {
    Main,
  },

  head() {
    return buildHead({
      ...getMetadata('godee'),
      image: 'https://maddevs.io/godee.png',
    })
  },
}
</script>

<style lang="scss">
@import '../../assets/styles/cases/base';
@import '../../assets/styles/cases/components';
@import '../../assets/styles/cases/godee/styles';
@import '../../assets/styles/cases/media';
</style>
