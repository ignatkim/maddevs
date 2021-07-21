<template>
  <section
    id="success-message"
    class="success-message"
  >
    <div class="success-message__conten-wrapper">
      <img
        src="@/assets/img/common/success-message-hand.svg"
        alt="Hand"
      >
      <div class="success-message__text-content">
        <!-- Title -->
        <div
          class="success-message__title"
          v-html="title"
        />

        <!-- Message -->
        <div
          class="success-message__info-text"
          v-html="message"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SuccessMessage',
  props: {
    title: {
      type: String,
      default: 'Thanks for your <br> interest in Mad Devs',
    },

    message: {
      type: String,
      default: 'The form has been submitted. <br> We will contact you as soon as possible.',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.success-message {
  background-color: $modal-bg-color;

  &__title {
    @include font('Poppins', 40px, 700);
    padding-top: 28px;
    color: $text-color--red;
    letter-spacing: -1px;
  }

  &__info-text {
    @include font('Inter', 18px, 400);
    padding-top: 23px;
    color: $text-color--grey;
    letter-spacing: -0.03em;
  }
}

.success-modal {
  &_success-message {
    padding: 30px 60px;
  }
}

@media screen and (max-width: 640px) {
  .success-message {
    padding: 0 40px;
  }

  .success-modal {
    &_success-message {
      padding-top: 70px;
    }
  }
}
</style>
