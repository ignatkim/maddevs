<template>
  <section
    class="paragraph-slice"
    :style="{ maxWidth }"
    :class="[
      `paragraph-slice-text--${position}`,
    ]"
  >
    <p
      :class="[
        `paragraph-slice-text`,
        `paragraph-slice-text--${size}`,
        `paragraph-slice-text--${type}`,
      ]"
      :data-aos="animation"
      v-html="text"
    />
  </section>
</template>

<script>
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'ParagraphSlice',

  mixins: [animateOnScrollMixin({
    offset: 200,
    delay: 50,
    anchorPlacement: 'top-center',
    duration: 1000,
    once: true,
  })],

  props: {
    text: {
      type: String,
      default: '',
    },

    animation: {
      type: String,
      default: 'none',
    },

    maxWidth: {
      type: String,
      default: '100%',
    },

    position: {
      type: String,
      default: 'left',
    },

    size: {
      type: String,
      default: 'sm',
    },

    type: {
      type: String,
      default: 'default',
    },
  },
}
</script>

<style lang="scss" scoped>
  .paragraph-slice {
    width: 100%;

    &-text {
      width: auto;
      max-width: 100%;
      display: block;
      color: inherit;
      letter-spacing: -1.3%;

      // Positions
      &--left {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
      }

      &--center {
        display: flex;
        align-items: flex-start;
        justify-content: center;
      }

      &--right {
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
      }

      // Sixes
      &--sm {
        @include font('Inter', 16px, 400);
        line-height: 24px;
      }

      &--md {
        @include font('Inter', 21px, 600);
        line-height: 30px;
      }

      &--lg {
        @include font('Inter', 24px, 600);
        line-height: 35px;
      }

      &--xs {
        @include font('Inter', 32px, 600);
        line-height: 44px;
      }

      &--xl {
        @include font('Inter', 60px, 600);
        line-height: 70px;
      }

      // Types
      &--list {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;

        &::before {
          content: '•';
          display: inline-block;
          color: #000;
          margin-right: 8px;
          margin-left: 8px;
        }
      }
    }
  }
</style>
