<template>
  <h2 class="title-slice-h2">
    {{ title }}
  </h2>
</template>

<script>
export default {
  name: 'TitleH2',
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
  .title-slice-h2 {
    @include font('Inter', 80px, 800);
    line-height: 84px;
    color: inherit;

    @media screen and (max-width: 1024px) {
      font-size: 60px;
      line-height: 67px;
    }

    @media screen and (max-width: 768px) {
      font-size: 40px;
    }
  }
</style>
