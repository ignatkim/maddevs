<template>
  <p
    :class="[
      'text-slice__content',
      `text-slice__content--${colorTheme}-theme`,
      large ? 'text-slice__content text-slice__content--large' : null,
    ]"
  >
    {{ text }}
  </p>
</template>

<script>
export default {
  name: 'SimpleText',
  props: {
    large: {
      type: Boolean,
      default: false,
    },

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
@import '@/assets/styles/slices/text-slices/_mixins';

.text-slice__content {
  @include text-slice-content;

  &--large {
    font-weight: 700;
    font-size: 60px;
    line-height: 70px;
    @media screen and (max-width: 1024px) {
      font-size: 32px;
      line-height: 40px;
    }
    @media screen and (max-width: 768px) {
      font-size: 28px;
    }
  }
}
</style>
