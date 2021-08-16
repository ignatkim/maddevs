<template>
  <div
    :class="[
      'button-slice',
      `button-slice--align-${alignment}`,
    ]"
  >
    <a
      :to="link"
      class="button-slice__link"
      :class="fullWidth ? 'button-slice__link--full-width' : null"
    >
      <UIButton
        v-if="variation === 'default-slice'"
        class="button-slice__button button-slice__button--normal"
      >
        {{ text }}
      </UIButton>
      <UIOutlinedButton
        v-else-if="variation === 'outlinedButton'"
        class="button-slice__button button-slice__button--outlined"
      >
        {{ text }}
      </UIOutlinedButton>
      <UILinkButton
        v-else-if="variation === 'linkButton'"
        class="button-slice__button button-slice__button--link"
      >
        {{ text }}
      </UILinkButton>
    </a>
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
    }
  },
}
</script>

<style lang="scss" scoped>
.button-slice {
  display: block;
  &--align {
    &-center {
      text-align: center;
    }
    &-right {
      text-align: right;
    }
  }
  &__link {
    display: inline-block;
    &--full-width {
      display: block;
    }
  }
  &__button {
    width: 100%;
    padding: 14px 24px;
    &--normal {
      line-height: 20px;
      &:hover {
        background-color: lighten($bgcolor--red, 10%) !important;
      }
    }
  }
}
</style>
