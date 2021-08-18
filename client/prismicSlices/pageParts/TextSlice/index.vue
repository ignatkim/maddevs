<template>
  <section
    class="text-slice"
    :style="{
      backgroundColor: sliceBackground,
    }"
  >
    <div
      class="container"
      :style="{
        maxWidth: slice.primary.maxWidth,
      }"
    >
      <SimpleText
        v-if="slice.variation === 'default-slice'"
        v-bind="slice.primary"
      />
      <Title
        v-else-if="slice.variation === 'title'"
        v-bind="slice.primary"
      />
      <TitleText
        v-else-if="slice.variation === 'titleText'"
        v-bind="slice.primary"
      />
      <TitleTextButton
        v-else-if="slice.variation === 'titleTextButton'"
        v-bind="slice.primary"
      />
      <TitleTextList
        v-else-if="slice.variation === 'titleTextList'"
        v-bind="slice.primary"
        :list="slice.items"
      />
    </div>
  </section>
</template>

<script>
import Title from './variations/Title'
import SimpleText from './variations/SimpleText'
import TitleText from './variations/TitleText'
import TitleTextButton from './variations/TitleTextButton'
import TitleTextList from './variations/TitleTextList'

export default {
  name: 'TextSlice',
  components: {
    Title,
    SimpleText,
    TitleText,
    TitleTextButton,
    TitleTextList,
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
.text-slice {
  word-break: break-word;
}

/deep/ h1,
/deep/ h2,
/deep/ h3 {
  @include font('Inter', 80px, 700);
  line-height: 67px;
  letter-spacing: -0.013em;
  @media screen and (max-width: 1024px) {
    font-size: 60px;
  }
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
}

/deep/ p {
  @include font('Inter', 32px, 400);
  line-height: 44px;
  letter-spacing: -0.013em;
  @media screen and (max-width: 1024px) {
    font-size: 24px;
    line-height: 35px;
  }
  @media screen and (max-width: 768px) {
    font-size: 21px;
    line-height: 30px;
  }
}

/deep/ li {
  font-size: 17px;
  line-height: 24px;
  letter-spacing: -0.013em;
}
</style>
