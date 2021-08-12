<template>
  <p :class="contentClass">
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
  },

  computed: {
    contentClass() {
      if (this.large) return 'text-slice__content--large'
      return 'text-slice__content'
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
