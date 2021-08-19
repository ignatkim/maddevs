<template>
  <section
    id="transparent-header-area"
    class="start-screen-slice"
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
    <div
      ref="sectionText"
      class="container"
      :style="{opacity: sectionTextOpacity}"
    >
      <div class="start-screen-slice__content">
        <h1
          class="start-screen-slice__title"
          v-html="title"
        />
        <p
          class="start-screen-slice__subtitle"
          v-html="subtitle"
        />
      </div>
    </div>
  </section>
</template>

<script>
import changeSectionTextOpacityMixin from '@/mixins/changeSectionTextOpacityMixin'

export default {
  name: 'StartScreen',
  mixins: [changeSectionTextOpacityMixin('sectionText')],
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
    max-width: 1028px;
  }
  &__title {
    color: $text-color--white;
    font-size: 100px;
    line-height: 96px;
    letter-spacing: -0.04em;
    @media screen and (max-width: 1024px) {
      font-size: 80px;
      line-height: 88px;
    }
    @media screen and (max-width: 768px) {
      font-size: 52px;
      line-height: 57px;
    }
  }
  &__subtitle {
    margin-top: 55px;
    font-size: 32px;
    line-height: 44px;
    letter-spacing: -0.013em;
    color: $text-color--silver;
    @media screen and (max-width: 1024px) {
      margin-top: 35px;
      font-size: 24px;
      line-height: 34px;
    }
    @media screen and (max-width: 768px) {
      margin-top: 30px;
      font-size: 21px;
      line-height: 30px;
    }
  }
}
</style>
