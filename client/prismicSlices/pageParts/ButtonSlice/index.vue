<template>
  <div
    class="button-slice"
    :style="{ backgroundColor: sliceBackground }"
  >
    <div
      class="container"
      :class="sliceAlignmentClass"
    >
      <UIButton
        v-if="variation === 'default-slice'"
        link
        :full-width="fullWidth"
        target="_blank"
        :class="[
          'button-slice__button',
          'button-slice__button--normal',
        ]"
        :style="{ maxWidth }"
        :data-aos="slice.primary.animation"
      >
        {{ text }}
      </UIButton>
      <UIOutlinedButton
        v-else-if="variation === 'outlinedButton'"
        link
        :full-width="fullWidth"
        :color="color"
        target="_blank"
        :class="[
          'button-slice__button',
          'button-slice__button--outlined',
        ]"
        :style="{ maxWidth }"
        :data-aos="slice.primary.animation"
      >
        {{ text }}
      </UIOutlinedButton>
      <UILinkButton
        v-else-if="variation === 'linkButton'"
        link
        :full-width="fullWidth"
        :color="color"
        target="_blank"
        :class="[
          'button-slice__button',
          'button-slice__button--link',
        ]"
        :style="{ maxWidth }"
        :data-aos="slice.primary.animation"
      >
        {{ text }}
      </UILinkButton>
    </div>
  </div>
</template>

<script>
import UIButton from '@/components/shared/UIButton'
import UIOutlinedButton from '@/components/shared/UIOutlinedButton'
import UILinkButton from '@/components/shared/UILinkButton'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'ButtonSlice',
  components: {
    UIButton,
    UIOutlinedButton,
    UILinkButton,
  },

  mixins: [animateOnScrollMixin({
    offset: 200,
    delay: 50,
    anchorPlacement: 'top-center',
    duration: 1000,
    once: true,
  })],

  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },

  data() {
    return {
      variation: this.slice.variation,
      fullWidth: this.slice.primary.fullWidth,
      maxWidth: this.slice.primary.maxWidth,
      alignment: this.slice.primary.alignment,
      link: this.slice.primary.link,
      text: this.slice.primary.text,
      color: this.slice.primary.color,
    }
  },

  computed: {
    sliceBackground() {
      if (this.slice.primary.background === 'white') return '#fff'
      if (this.slice.primary.background === 'grey') return '#f5f7f9'
      return '#111213' // black
    },

    sliceAlignmentClass() {
      if (this.alignment === 'center') return 'button-slice__content--align-center'
      if (this.alignment === 'right') return 'button-slice__content--align-right'
      return 'button-slice__content--align-left'
    },
  },
}
</script>

<style lang="scss" scoped>
.button-slice {
  display: block;

  &__content {
    &--align {
      &-center {
        text-align: center;
      }
      &-right {
        text-align: right;
      }
    }
  }

  &__button {
    box-sizing: border-box;
    padding: 16px 24px;
    line-height: 20px;
    &--normal:hover {
      background-color: lighten($bgcolor--red, 10%) !important;
    }
  }
}
</style>
