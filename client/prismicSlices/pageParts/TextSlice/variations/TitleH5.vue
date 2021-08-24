<template>
  <h5 class="text-slice__content text-slice__title-h5">
    {{ title }}
  </h5>
</template>

<script>
export default {
  name: 'TitleH5',
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },

    colorTheme: {
      type: String,
      default: 'white',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/slices/_slices';
</style>
