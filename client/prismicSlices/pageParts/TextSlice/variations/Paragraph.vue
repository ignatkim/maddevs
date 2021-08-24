<template>
  <section
    class="paragraph-slice"
    :style="{ maxWidth }"
  >
    <p
      :class="`paragraph-slice-text paragraph-slice-text--${size} paragraph-slice-text--${position}`"
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
  },
}
</script>

<style lang="scss" scoped>
  .paragraph-slice {
    width: 100%;

    &-text {
      width: 100%;
      display: block;
      color: inherit;
      letter-spacing: -1.3%;

      &--left {
        text-align: left;
      }

      &--center {
        text-align: center;
      }

      &--right {
        text-align: right;
      }

      &--sm {
        @include font('Inter', 16px, 400);
        line-height: 24px;
      }

      &--md {
        @include font('Inter', 21px, 600);
        line-height: 30px;

        @media screen and (max-width: 375px) {
          font-size: 16px;
          line-height: 24px;
          line-height: 400;
        }
      }

      &--lg {
        @include font('Inter', 24px, 600);
        line-height: 35px;

        @media screen and (max-width: 768px) {
          font-size: 21px;
          line-height: 30px;
        }

        @media screen and (max-width: 375px) {
          font-size: 16px;
          line-height: 24px;
          line-height: 400;
        }
      }

      &--xs {
        @include font('Inter', 32px, 600);
        line-height: 44px;

        @media screen and (max-width: 1024px) {
          font-size: 24px;
          line-height: 35px;
        }

        @media screen and (max-width: 768px) {
          font-size: 21px;
          line-height: 30px;
        }

        @media screen and (max-width: 375px) {
          font-size: 16px;
          line-height: 24px;
          line-height: 400;
        }
      }

      &--xl {
        @include font('Inter', 60px, 600);
        line-height: 70px;

        @media screen and (max-width: 1200px) {
          font-size: 32px;
          line-height: 44px;
        }

        @media screen and (max-width: 1024px) {
          font-size: 24px;
          line-height: 35px;
        }

        @media screen and (max-width: 768px) {
          font-size: 21px;
          line-height: 30px;
        }

        @media screen and (max-width: 375px) {
          font-size: 16px;
          line-height: 24px;
          line-height: 400;
        }
      }
    }
  }
</style>
