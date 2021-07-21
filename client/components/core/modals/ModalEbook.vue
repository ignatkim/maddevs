<template>
  <!-- id is needed for google analytics, don't remove it -->
  <Modal
    :id="id"
    ref="modalEbook"
    :class="{ 'modal-ebook--without-padding': !formSended }"
  >
    <ReadForm
      v-if="!formSended"
      @form-sended="handleSendedForm"
    />
    <SuccessMessage
      v-else
      :message="successMessage"
    />
  </Modal>
</template>

<script>
import Modal from '@/components/core/Modal'
import ReadForm from '@/components/Ebook/ReadForm'
import SuccessMessage from '@/components/core/modals/SuccessMessage'

export default {
  name: 'ModalEbook',
  components: {
    Modal,
    ReadForm,
    SuccessMessage,
  },

  props: {
    id: {
      type: String,
      default: '',
    },

    location: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      successMessage: null,
      formSended: false,
    }
  },

  methods: {
    handleSendedForm(payload) {
      this.successMessage = `
        The letter with the PDF file was successfully sent to mail ${payload.email}.
        <br><br> Please check your email.
      `
      this.formSended = true
    },

    show() {
      if (!this.$refs.modalEbook.show) return
      this.$refs.modalEbook.show()
    },

    close() {
      if (!this.$refs.modalEbook.close) return
      this.$refs.modalEbook.close()
    },
  },
}
</script>

<style lang="scss" scoped>
  .modal-ebook--without-padding {
    /deep/ .modal {
      &_container,
      &_content,
      &_head {
        padding: 0;
      }

      &_container {
        width: 498px;
        max-width: 498px;
      }

      &_close {
        top: 20px;
        right: 20px;
      }
    }

    /deep/ .read-form {
      max-width: 100%;
    }
  }
</style>
