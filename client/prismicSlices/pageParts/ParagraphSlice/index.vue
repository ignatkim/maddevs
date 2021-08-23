<template>
  <section
    class="paragraph-slice"
    :class="colorThemeClass"
  >
    <div
      class="container"
      :style="{ maxWidth: slice.primary.maxWidth }"
    >
      <p
        :class="`paragraph-slice-text paragraph-slice-text--${slice.primary.size} paragraph-slice-text--${slice.primary.position}`"
        v-html="slice.primary.text"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'ParagraphSlice',

  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },

  computed: {
    colorThemeClass() {
      if (this.slice?.primary?.colorTheme === 'white') return 'paragraph-slice--white-theme'
      return 'paragraph-slice--black-theme'
    },
  },
}
</script>

<style lang="scss" scoped>
  .paragraph-slice {
    width: 100%;

    &--white-theme {
      background-color: $bgcolor--white-primary;
      color: $text-color--black-lighter;
    }

    &--black-theme {
      background-color: $bgcolor--black;
      color: $text-color--white;
    }

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
        @include font('Inter', 21px, 600);
        line-height: 30px;
      }

      &--md {
        @include font('Inter', 24px, 600);
        line-height: 35px;

        @media screen and (max-width: 375px) {
          font-size: 21px;
          line-height: 30px;
        }
      }

      &--lg {
        @include font('Inter', 32px, 600);
        line-height: 44px;

        @media screen and (max-width: 768px) {
          font-size: 24px;
          line-height: 35px;
        }

        @media screen and (max-width: 375px) {
          font-size: 21px;
          line-height: 30px;
        }
      }

      &--xl {
        @include font('Inter', 60px, 600);
        line-height: 70px;

        @media screen and (max-width: 1024px) {
          font-size: 32px;
          line-height: 44px;
        }

        @media screen and (max-width: 768px) {
          font-size: 24px;
          line-height: 35px;
        }

        @media screen and (max-width: 375px) {
          font-size: 21px;
          line-height: 30px;
        }
      }
    }
  }
</style>
