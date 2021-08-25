<template>
  <div class="contacts-slice-form">
    <h3 class="contacts-slice-form__title">
      Tell Us About <br> Your Project
    </h3>
    <BaseForm
      id="contacts-slice-form"
      ref="baseForm"
      :use-company="true"
      :use-description="true"
      :use-labels="false"
      :fullname-required="false"
      full-name-placeholder="Full Name"
      company-placeholder="Company"
      email-placeholder="Work Email"
      phone-placeholder="Phone Number"
      description-placeholder="How we can help you?"
      button-class-name="contacts-slice-form__button"
      button-label="Order a project now"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import BaseForm from '@/components/core/forms/BaseForm'
import createLeadMixin from '@/mixins/createLeadMixin'

import exceptKeys from '@/helpers/exceptKeys'

export default {
  name: 'OrderForm',
  components: {
    BaseForm,
  },

  mixins: [createLeadMixin(304632, 'Tell Us About Your Project')],

  methods: {
    handleSubmit(formData) {
      const variables = {
        ...exceptKeys(formData, 'description'),
        projectDescription: formData.description,
        formLocation: '\'Order a project now\' button, prismic ContactsSlice component',
      }

      // from mixin
      this.submitLead(variables)
    },

    reset() {
      this.$refs.baseForm.reset()
    },
  },
}
</script>

<style lang="scss" scoped>
.contacts-slice-form {
  background-color: $bgcolor--white-primary;
  padding: 44px 25px;
  border-radius: 10px;
  @media screen and (max-width: 1024px) {
    padding: 35px 16px;
  }
  @media screen and (max-width: 768px) {
    padding: 44px 25px;
  }
  @media screen and (max-width: 600px) {
    padding: 35px 16px;
  }
  @media screen and (max-width: 440px) {
    padding: 35px 12px;
  }

  &__title {
    @include font('Inter', 42px, 700);
    line-height: 46px;
    text-align: center;
    letter-spacing: -1.3px;
    color: $text-color--black-lighter;
    margin-bottom: 46px;
    @media screen and (max-width: 1024px) {
      font-size: 36px;
      line-height: 46px;
      margin-bottom: 30px;
    }
    @media screen and (max-width: 768px) {
      font-size: 34px;
      line-height: 50px;
      margin-bottom: 13px;
    }
  }

  .form {
    /deep/ .entry-field {
      color: #848484;
      border: 1px solid $border-color--grey-form;
      background: transparent;
      padding: 13px 20px;
      border-radius: 6px;
      &::placeholder {
        color: #848484;
      }
      @media screen and (max-width: 1024px) {
        font-size: 14px;
      }
    }

    /deep/ .error-text {
      @media screen and (max-width: 1024px) {
        font-size: 12px;
      }
      @media screen and (max-width: 768px) {
        font-size: 14px;
      }
      @media screen and (max-width: 600px) {
        font-size: 12px;
      }
    }

    /deep/ .v-placeholder-asterisk {
      @media screen and (max-width: 1024px) {
        font-size: 14px;
      }
    }

    /deep/ .field-item {
      margin-bottom: 12px;
      &:nth-child(2),
      &:nth-child(3) {
        display: inline-block;
        width: calc(50% - 7px);
        vertical-align: top;
      }
      &:nth-child(2) {
        margin-right: 9.5px;
      }
      &:last-child {
        margin-bottom: 0;
      }
      @media screen and (max-width: 1024px) {
        margin-bottom: 10px;
      }
    }

    /deep/ .textarea {
      height: 192px;
      @media screen and (max-width: 1024px) {
        height: 92px;
      }
      @media screen and (max-width: 768px) {
        height: 192px;
      }
      @media screen and (max-width: 600px) {
        height: 92px;
      }
    }

    /deep/ .form-checkboxes {
      margin: 18px 0 46px;
      @media screen and (max-width: 1024px) {
        margin: 18px 0 30px;
      }
    }

    /deep/ .form-checkbox-label {
      font-size: 16px;
      line-height: 24px;
      @media screen and (max-width: 1024px) {
        font-size: 14px;
      }
    }

    /deep/ .contacts-slice-form__button {
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      color: $text-color--black-lighter;
      padding: 18px;
      background-color: transparent;
      border: 1px solid $border-color--red-opacity;
    }
  }
}
</style>
