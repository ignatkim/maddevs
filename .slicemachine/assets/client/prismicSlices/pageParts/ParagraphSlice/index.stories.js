import MyComponent from '../../../../../../client/prismicSlices/pageParts/ParagraphSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/ParagraphSlice'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"paragraph_slice","items":[],"primary":{"text":"drive sexy vortals","colorTheme":"white"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _ParagraphLg = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"paragraphLg","name":"Paragraph LG","slice_type":"paragraph_slice","items":[],"primary":{"text":"strategize interactive systems","colorTheme":"black"},"id":"_ParagraphLg"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_ParagraphLg.storyName = 'Paragraph LG'
