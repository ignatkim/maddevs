<template>
  <div class="read-form">
    <img
      v-lazy-load
      width="110"
      height="155"
      data-src="@/assets/img/Ebook/book.svg"
      alt="Pricing strategies"
    >
    <h2>Get your copy of  “Custom Software Development: Pricing Strategies”</h2>
    <div class="read-form_fields">
      <BaseInput
        v-model="name"
        name="name"
        :show-label="false"
        :required="true"
        placeholder="Your name"
        :validation="$v.name"
      />
      <BaseInput
        v-model="email"
        name="email"
        :show-label="false"
        placeholder="Email"
        :required="true"
        :validation="$v.email"
      />
      <button
        class="read-form_btn"
        :class="{ 'read-form_btn--active': isValid }"
        @click="submit"
      >
        Send me the ebook
      </button>
    </div>
    <p>By providing your email address, you agree to our Privacy Policy. We will not send you any spam – only link for downloading the ebook and some more useful resources in the future.</p>
  </div>
</template>

<script>
import { email, maxLength, required } from 'vuelidate/lib/validators'
import BaseInput from '@/components/core/forms/BaseInput'
import { sendEmail } from '@/api/email'

export default {
  name: 'ReadForm',
  components: { BaseInput },
  data() {
    return {
      name: '',
      email: '',
    }
  },

  validations: {
    email: {
      required,
      email,
    },

    name: {
      required,
      maxLength: maxLength(100),
    },

    validationGroup: ['email', 'name'],
  },

  computed: {
    isValid() {
      return !this.$v.validationGroup.$invalid
    },
  },

  methods: {
    async submit() {
      if (!this.isValid) return
      const requestSender = {
        body: {
          email: {
            templateId: 348595, // Required
            variables: {
              subject: 'Your Pricing Strategies Ebook by Mad Devs',
              emailTo: this.email,
            },

            attachment: null,
          },
        },

        base64: null,
      }
      const requestMarketing = {
        body: {
          email: {
            templateId: 624246, // Required
            variables: {
              subject: 'Request a PDF file from the Ebook page',
              senderName: this.name,
              emailTo: process.env.emailMarketing,
            },

            attachment: null,
          },
        },

        base64: '',
      }
      sendEmail(this.$axios, requestSender) // Send email to sender
      sendEmail(this.$axios, requestMarketing) // Send email to Mad Devs marketing
      this.$emit('form-sended', { email: this.email, name: this.name })
      this.resetForm()
    },

    resetForm() {
      this.$v.$reset() // Reset validation form
      this.name = ''
      this.email = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.read-form {
  width: 100%;
  max-width: 498px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 42px 48px;
  background-color: #F4F4F4;
  border-radius: 4px;
  box-sizing: border-box;

  @media screen and (max-width: 540px) {
    padding: 32px 38px;
  }

  @media screen and (max-width: 376px) {
    padding: 22px 28px;
  }

  > img {
    width: 100%;
    max-width: 110px;
    height: auto;
    margin-bottom: 15px;
  }

  > h2 {
    @include font('Inter', 22px, 400);
    line-height: 30px;
    letter-spacing: -1px;
    color: #111;
    margin-bottom: 24px;
  }

  &_fields {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    /deep/ .field-item {
      width: 100%;

      input {
        width: 100%;
        padding: 12px 15px;
        @include font('Inter', 16px, 400);
        color: #707072;
        border-radius: 4px;
        border: 1px solid #707072;
        background-color: transparent;
        box-sizing: border-box;
      }

      .v-placeholder-asterisk {
        left: 17px !important;
        top: 50% !important;
        transform: translateY(-50%);
        color: #707072;
      }
    }
  }

  &_btn {
    width: auto;
    padding: 12px 15px;
    @include font('Inter', 16px, 600);
    line-height: 20px;
    letter-spacing: -0.4px;
    color: #A0A0A1;
    border-radius: 4px;
    border: 1px solid #707072;
    background-color: transparent;
    cursor: pointer;
    margin-bottom: 16px;
    box-sizing: border-box;
    cursor: not-allowed;
    opacity: 0.7;

    &--active {
      background-color: #ec1c24;
      border-color: #ec1c24;
      color: #fff;
      opacity: 1;
      cursor: pointer;

      &:hover {
        background-color: #d41e24;
      }

      &:active {
        background-color: #c21c22;
      }
    }
  }

  > p {
    @include font('Inter', 14px, 400);
    letter-spacing: -0.4px;
    color: #A0A0A1;
    line-height: 18px;
  }
}
</style>
