<template>
  <div class="text-slice__content">
    <p class="text-slice__red-text">
      {{ title }}
    </p>
    <p class="text-slice__simple-text-medium">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'RedTextSimpleTextMedium',
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },

    text: {
      type: String,
      required: true,
      default: '',
    },

    colorTheme: {
      type: String,
      default: 'white',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/slices/_slices';

.text-slice {
  &__red-text {
    margin-bottom: 12px;
    line-height: 130%;
    letter-spacing: -0.04em;
    color: $text-color--red;
    @include font('Inter', 21px, 400);

    @media screen and (max-width: 375px) {
      font-size: 16px;
      line-height: 150%;
      letter-spacing: -0.4px;
    }
  }
}
</style>
