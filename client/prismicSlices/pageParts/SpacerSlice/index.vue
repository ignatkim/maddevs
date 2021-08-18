<template>
  <div>
    <section
      class="spacer-slice"
      :style="{
        height,
        backgroundColor,
      }"
    />
  </div>
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

  data() {
    return {
      height: this.slice.primary.height,
    }
  },

  computed: {
    backgroundColor() {
      if (this.slice.primary.background === 'black') return '#111213'
      return '#fff'
    },
  },

  mounted() {
    window.addEventListener('resize', this.onResize)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    onResize() {
      if (window.innerWidth < 375) {
        this.height = this.slice.primary['height-sm']
      } if (window.innerWidth > 375 && window.innerWidth < 768) {
        this.height = this.slice.primary['height-md']
      } if (window.innerWidth > 768 && window.innerWidth < 1024) {
        this.height = this.slice.primary['height-lg']
      } if (window.innerWidth > 1024 && window.innerWidth < 1440) {
        this.height = this.slice.primary['height-xl']
      } if (window.innerWidth > 1440) {
        this.height = this.slice.primary.height
      }
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
