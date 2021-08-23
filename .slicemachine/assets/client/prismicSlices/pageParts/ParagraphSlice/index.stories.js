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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"paragraph_slice","items":[],"primary":{"text":"strategize intuitive experiences","colorTheme":"black","maxWidth":"envisioneer magnetic models","size":"lg","position":"center"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
