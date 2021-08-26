<template>
  <div
    class="button-slice"
    :style="{
      backgroundColor: sliceBackground,
    }"
  >
    <div
      :class="[
        'container',
        `button-slice__content--align-${alignment}`,
      ]"
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

export default {
  name: 'ButtonSlice',
  components: {
    UIButton,
    UIOutlinedButton,
    UILinkButton,
  },

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
    padding: 16px 24px;
    line-height: 20px;
    &--normal:hover {
      background-color: lighten($bgcolor--red, 10%) !important;
    }
  }
}
</style>
