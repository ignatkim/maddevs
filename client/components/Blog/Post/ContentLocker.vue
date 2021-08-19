<template>
  <ModalContentLocker
    id="content-locker"
    ref="modalContentLocker"
  />
</template>

<script>
import ModalContentLocker from '@/components/core/modals/ModalContentLocker'

const TIME_TO_LOCK_CONTENT = 15000 // in ms

export default {
  name: 'ContentLocker',
  components: { ModalContentLocker },

  data() {
    return {
      isScrolled: false,
      isShowLocker: false,
    }
  },

  watch: {
    isScrolled() {
      this.startTimeout()
    },

    isShowLocker() {
      this.$refs.modalContentLocker.show()
    },
  },

  mounted() {
    this.addScrollListener()
  },

  destroyed() {
    this.removeScrollListener()
  },

  methods: {
    handleScroll() {
      this.isScrolled = true
      this.removeScrollListener()
    },

    addScrollListener() {
      document.addEventListener('scroll', this.handleScroll)
    },

    removeScrollListener() {
      document.removeEventListener('scroll', this.handleScroll)
    },

    startTimeout() {
      setTimeout(() => {
        this.isShowLocker = true
      }, TIME_TO_LOCK_CONTENT)
    },
  },
}
</script>

<style lang="scss" scoped></style>
