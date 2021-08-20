<template>
  <div class="text-slice__content">
    <h2 class="text-slice__title-h5">
      {{ title }}
    </h2>
    <p class="text-slice__paragraph">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'TitleH5Text',
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
  &__title-h5 {
    margin-bottom: 14px;
  }

  &__paragraph {
    @include font('Inter', 20px, 400);
    line-height: 140%;
    letter-spacing: -0.015em;

    @media screen and (max-width: 768px) {
      font-size: 16px;
      line-height: 150%;
      letter-spacing: -0.4px;
    }
  }
}
</style>
