<template>
  <section
    id="transparent-header-area"
    class="start-screen-slice"
    :style="{
      background: sliceGradient,
    }"
  >
    <img
      :src="image.url"
      :alt="image.alt"
      :style="{
        opacity: imageOpacity,
        backgroundColor: sliceBackground,
      }"
      class="start-screen-slice__image"
    >
    <!-- sectionTextOpacity - value from changeOpacityOnScrollMixin mixin -->
    <div class="container">
      <div
        ref="sectionText"
        :style="{ opacity: sectionTextOpacity }"
        class="start-screen-slice__content"
      >
        <h1
          class="start-screen-slice__title"
          v-html="formatHtmlText(title)"
        />
        <p
          class="start-screen-slice__subtitle"
          v-html="formatHtmlText(subtitle)"
        />
      </div>
    </div>
  </section>
</template>

<script>
import changeSectionTextOpacityMixin from '@/mixins/changeSectionTextOpacityMixin'
import prismicSlicesMixin from '@/mixins/prismicSlicesMixin'

export default {
  name: 'StartScreen',
  mixins: [changeSectionTextOpacityMixin('sectionText'), prismicSlicesMixin],
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
      imageOpacity: this.slice.primary.imageOpacity,
      image: this.slice.primary.image,
      title: this.slice.primary.title,
      subtitle: this.slice.primary.subtitle,
    }
  },

  computed: {
    sliceBackground() {
      if (this.slice.primary.background === 'white') return '#fff'
      if (this.slice.primary.background === 'grey') return '#f5f7f9'
      return '#111213' // black
    },

    sliceGradient() {
      if (this.slice.primary.background === 'white') return 'linear-gradient(180deg, rgba(17, 18, 19, 0) 60%, #fff)'
      if (this.slice.primary.background === 'grey') return 'linear-gradient(180deg, rgba(17, 18, 19, 0) 60%, #111213)'
      return '#linear-gradient(180deg, rgba(17, 18, 19, 0) 60%, #111213)' // black
    },
  },
}
</script>

<style lang="scss" scoped>
.start-screen-slice {
  position: relative;
  height: 100vh;
  min-height: 568px;
  background: linear-gradient(180deg, rgba(17, 18, 19, 0) 60%, #111213);
  overflow: hidden;
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__image {
    display: block;
    z-index: -1;
    position: absolute;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    object-fit: cover;
    background-color: $bgcolor--black;
  }
  &__content {
    text-align: center;
    z-index: 2;
    max-width: 1113px;
  }
  &__title {
    @include font('Inter', 100px, 800);
    line-height: 105px;
    letter-spacing: -2px;
    color: $text-color--white-primary;
    @media screen and (max-width: 1024px) {
      font-size: 76px;
      line-height: 72px;
    }
    @media screen and (max-width: 768px) {
      font-size: 42px;
      line-height: 48px;
    }
    /deep/ .large {
      @include font('Inter', 130px, 800);
      line-height: 105px;
      @media screen and (max-width: 1024px) {
        font-size: 120px;
      }
      @media screen and (max-width: 768px) {
        font-size: 65px;
        line-height: 48px;
      }
    }
  }
  &__subtitle {
    @include font('Inter', 32px, 600);
    line-height: 44px;
    letter-spacing: -1px;
    margin-top: 50px;
    color: $text-color--white-primary;
    @media screen and (max-width: 1024px) {
      font-size: 32px;
      line-height: 44px;
    }
    @media screen and (max-width: 768px) {
      margin-top: 27px;
      font-size: 21px;
      line-height: 30px;
    }
  }
}
</style>
