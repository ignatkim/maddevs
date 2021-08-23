<template>
  <h3 class="title-slice-h3">
    {{ title }}
  </h3>
</template>

<script>
export default {
  name: 'TitleH3',
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
    @include font('Inter', 60px, 800);
    line-height: 67px;
    color: inherit;
  }
</style>
