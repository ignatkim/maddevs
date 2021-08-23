<template>
  <p
    class="paragraph-slice-sm"
    v-html="title"
  />
</template>

<script>
export default {
  name: 'ParagraphSM',
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
  .paragraph-slice-sm {
    @include font('Inter', 32px, 600);
    line-height: 44px;
    color: inherit;

    @media screen and (max-width: 1024px) {
      font-size: 24px;
      line-height: 35px;
    }

    @media screen and (max-width: 768px) {
      font-size: 21px;
      line-height: 30px;
    }
  }
</style>
