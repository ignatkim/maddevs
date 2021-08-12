import MyComponent from '../../../../../../client/prismicSlices/pageParts/BoilerplatesGridSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/BoilerplatesGridSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"boilerplates_grid_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Evolve customized architectures","spans":[]}],"description":[{"type":"paragraph","text":"Incididunt ullamco exercitation proident Lorem labore.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
