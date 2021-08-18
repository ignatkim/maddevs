<template>
  <div>
    <section
      class="spacer-slice"
      :style="{
        height,
        backgroundColor,
      }"
    />
    {{ height }}
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
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    onResize() {
      const defaultHeight = this.slice.primary.height || '50px'
      if (window.innerWidth < 375) {
        this.height = this.slice.primary['height-sm'] || defaultHeight
      } if (window.innerWidth > 375 && window.innerWidth < 768) {
        this.height = this.slice.primary['height-md'] || defaultHeight
      } if (window.innerWidth > 768 && window.innerWidth < 1024) {
        this.height = this.slice.primary['height-lg'] || defaultHeight
      } if (window.innerWidth > 1024 && window.innerWidth < 1440) {
        this.height = this.slice.primary['height-xl'] || defaultHeight
      } if (window.innerWidth > 1440) {
        this.height = defaultHeight
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
