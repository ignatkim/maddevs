<template>
  <section
    class="title-slice"
    :style="{ maxWidth }"
  >
    <component
      :is="tag"
      :class="[
        `title-slice-text`,
        `title-slice-text--${size}`,
        `title-slice-text--${position}`
      ]"
      :data-aos="animation"
      v-html="title"
    />
  </section>
</template>

<script>
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'TitleSlice',

  mixins: [animateOnScrollMixin({
    offset: 200,
    delay: 50,
    anchorPlacement: 'top-center',
    duration: 1000,
    once: true,
  })],

  props: {
    title: {
      type: String,
      default: '',
    },

    animation: {
      type: String,
      default: 'none',
    },

    tag: {
      type: String,
      default: 'h2',
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
  .title-slice {
    width: 100%;

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

      &--xs {
        @include font('Inter', 21px, 400);
        line-height: 28px;
      }

      &--sm {
        @include font('Inter', 33px, 600);
        line-height: 43px;
      }

      &--md {
        @include font('Inter', 40px, 700);
        line-height: 67px;
      }

      &--lg {
        @include font('Inter', 60px, 800);
        line-height: 67px;
      }

      &--xl {
        @include font('Inter', 80px, 800);
        line-height: 90px;
      }
    }
  }
</style>
