<template>
  <section
    class="spacer-slice"
    :style="{
      height: slice.primary.height,
      backgroundColor: slice.primary.color
    }"
  />
</template>

<script>
export default {
  name: 'SpacerSlice',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.spacer-slice {
  width: 100%;
  display: block;
  background-color: #fff;
}
</style>
