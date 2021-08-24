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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"paragraph_slice","items":[],"primary":{"text":"productize out-of-the-box infrastructures","colorTheme":"white","maxWidth":"optimize plug-and-play web services","size":"lg","position":"right","animation":"none"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
