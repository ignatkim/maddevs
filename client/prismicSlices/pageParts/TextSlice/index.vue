<template>
  <section
    class="text-slice"
    :class="colorThemeClass"
  >
    <div class="container">
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
      <TitleH5
        v-else-if="slice.variation === 'titleH5'"
        v-bind="slice.primary"
        :list="slice.items"
      />
      <TitleH5Text
        v-else-if="slice.variation === 'titleH5Text'"
        v-bind="slice.primary"
        :list="slice.items"
      />
      <Paragraph
        v-else-if="slice.variation === 'paragraph'"
        v-bind="slice.primary"
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
import TitleH5 from './variations/TitleH5'
import TitleH5Text from './variations/TitleH5Text'
import Paragraph from './variations/Paragraph'

export default {
  name: 'TextSlice',
  components: {
    Title,
    SimpleText,
    TitleText,
    TitleTextButton,
    TitleTextList,
    TitleH5,
    TitleH5Text,
    Paragraph,
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
    colorThemeClass() {
      if (this.slice?.primary?.colorTheme === 'white') return 'text-slice--white-theme'
      return 'text-slice--black-theme'
    },
  },
}
</script>

<style lang="scss" scoped>
.text-slice {
  word-break: break-word;

  &--white-theme {
    background-color: $bgcolor--white-primary;
    color: $text-color--black-lighter;
  }
  &--black-theme {
    background-color: $bgcolor--black;
    color: $text-color--white;
  }
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
    line-height: 40px;
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
