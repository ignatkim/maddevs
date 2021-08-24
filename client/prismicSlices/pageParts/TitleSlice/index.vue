<template>
  <section
    class="title-slice"
    :class="colorThemeClass"
  >
    <div
      class="container"
      :style="{ maxWidth: slice.primary.maxWidth }"
    >
      <component
        :is="slice.primary.tag"
        :class="`title-slice-text title-slice-text--${slice.primary.size} title-slice-text--${slice.primary.position}`"
        v-html="slice.primary.title"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'TitleSlice',

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
      if (this.slice?.primary?.colorTheme === 'white') return 'title-slice--white-theme'
      return 'title-slice--black-theme'
    },
  },
}
</script>

<style lang="scss" scoped>
  .title-slice {
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
      letter-spacing: -0.013em;

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
        @include font('Inter', 33px, 700);
        line-height: 43px;
      }

      &--md {
        @include font('Inter', 40px, 700);
        line-height: 67px;

        @media screen and (max-width: 375px) {
          font-size: 33px;
          line-height: 43px;
        }
      }

      &--lg {
        @include font('Inter', 60px, 700);
        line-height: 67px;

        @media screen and (max-width: 768px) {
          font-size: 40px;
        }

        @media screen and (max-width: 375px) {
          font-size: 33px;
          line-height: 43px;
        }
      }

      &--xl {
        @include font('Inter', 80px, 700);
        line-height: 84px;

        @media screen and (max-width: 1024px) {
          font-size: 60px;
          line-height: 67px;
        }

        @media screen and (max-width: 768px) {
          font-size: 40px;
        }

        @media screen and (max-width: 375px) {
          font-size: 33px;
          line-height: 43px;
        }
      }
    }
  }
</style>
