const prismicSlicesMixin = {
  methods: {
    formatHtmlText(text) {
      if (typeof text !== 'string') return ''
      return text
        .replace(/&#8232;/g, '') // removes the "L SEP" symbol from text
    },
  },
}

export default prismicSlicesMixin
