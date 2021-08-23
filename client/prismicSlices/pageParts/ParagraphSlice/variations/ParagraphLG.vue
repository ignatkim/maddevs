<template>
  <p class="paragraph-slice-lg">
    {{ title }}
  </p>
</template>

<script>
export default {
  name: 'ParagraphLG',
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
  .paragraph-slice-lg {
    @include font('Inter', 60px, 600);
    line-height: 70px;
    color: inherit;

    @media screen and (max-width: 1024px) {
      font-size: 32px;
      line-height: 40px;
    }

    @media screen and (max-width: 768px) {
      font-size: 28px;
    }
  }
</style>
