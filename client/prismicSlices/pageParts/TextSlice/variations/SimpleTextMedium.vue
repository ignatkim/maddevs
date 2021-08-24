<template>
  <p class="text-slice__simple-text-medium">
    {{ text }}
  </p>
</template>

<script>
export default {
  name: 'SimpleTextMedium',
  props: {
    text: {
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
