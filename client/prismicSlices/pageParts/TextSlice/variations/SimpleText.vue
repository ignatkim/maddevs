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
