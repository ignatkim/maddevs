<template>
  <h2 class="text-slice__content">
    {{ title }}
  </h2>
</template>

<script>
export default {
  name: 'Title',
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
.text-slice__content {
  text-align: center;
}
</style>
