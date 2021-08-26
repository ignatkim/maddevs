import MyComponent from '../../../../../../client/prismicSlices/pageParts/SpacerSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/SpacerSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"spacer_slice","items":[],"primary":{"background":"black","height":"incubate dot-com supply-chains","height-xl":"transform visionary convergence","height-lg":"maximize dynamic bandwidth","height-md":"transition out-of-the-box models","height-sm":"whiteboard robust e-markets"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
