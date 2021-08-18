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

.text-slice__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  &--white-theme {
    color: $text-color--white;
  }
  &--black-theme {
    color: $text-color--black-lighter;
  }
}
</style>
