<template>
  <h2
    :class="[
      'text-slice__content',
      `text-slice__content--${colorTheme}-theme`,
    ]"
  >
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
@import '@/assets/styles/slices/text-slices/_mixins';

.text-slice__content {
  @include text-slice-content;
}
</style>
