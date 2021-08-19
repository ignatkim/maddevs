<template>
  <div
    class="button-slice"
    :class="colorThemeClass"
  >
    <div
      :class="[
        'container',
        `button-slice__content--align-${alignment}`,
      ]"
    >
      <a
        :to="link.url"
        target="_blank"
        class="button-slice__link"
        :class="{ 'button-slice__link--full-width': fullWidth }"
      >
        <UIButton
          v-if="variation === 'default-slice'"
          full-width
          class="button-slice__button button-slice__button--normal"
        >
          {{ text }}
        </UIButton>
        <UIOutlinedButton
          v-else-if="variation === 'outlinedButton'"
          full-width
          :color="color"
          class="button-slice__button button-slice__button--outlined"
        >
          {{ text }}
        </UIOutlinedButton>
        <UILinkButton
          v-else-if="variation === 'linkButton'"
          full-width
          :color="color"
          class="button-slice__button button-slice__button--link"
        >
          {{ text }}
        </UILinkButton>
      </a>
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
      alignment: this.slice.primary.alignment,
      link: this.slice.primary.link,
      text: this.slice.primary.text,
      color: this.slice.primary.color,
    }
  },

  computed: {
    colorThemeClass() {
      if (this.slice?.primary?.colorTheme === 'white') return 'button-slice--white-theme'
      return 'button-slice--black-theme'
    },
  },
}
</script>

<style lang="scss" scoped>
.button-slice {
  display: block;
  &--black-theme {
    background-color: $bgcolor--black;
  }
  &--white-theme {
    background-color: $bgcolor--white-primary;
  }

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

  &__link {
    display: inline-block;
    &--full-width {
      display: block;
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
