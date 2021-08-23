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
  }
</style>
