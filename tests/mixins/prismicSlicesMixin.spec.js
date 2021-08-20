import prismicSlicesMixin from '@/mixins/prismicSlicesMixin'

describe('Prismic Slices Mixin', () => {
  describe('formatHtmlText method', () => {
    it('should return empty string with incorrect parameter', () => {
      expect(prismicSlicesMixin.methods.formatHtmlText(undefined)).toBe('')
    })

    it('should remove the &#8232; unicode of \'L SEP\' symbol from string', () => {
      expect(prismicSlicesMixin.methods.formatHtmlText('&#8232;')).toBe('')
    })
  })
})
