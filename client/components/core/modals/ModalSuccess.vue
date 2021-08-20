<template>
  <!-- id is needed for google analytics, don't remove it -->
  <Modal
    :id="id"
    ref="successModal"
  />
</template>

<script>
import Modal from '@/components/core/Modal'

export default {
  name: 'ModalSuccess',
  components: {
    Modal,
  },

  props: {
    id: {
      type: String,
      default: null,
    },
  },

  methods: {
    show() {
      this.$refs.successModal.makeSuccess()
      this.$refs.successModal.show()
    },

    close() {
      this.$refs.successModal.close()
    },
  },
}
</script>
