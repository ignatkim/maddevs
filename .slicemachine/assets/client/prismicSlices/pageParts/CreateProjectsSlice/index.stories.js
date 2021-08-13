import MyComponent from '../../../../../../client/prismicSlices/pageParts/CreateProjectsSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/CreateProjectsSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"create_projects_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Engineer leading-edge e-markets","spans":[]}],"description":[{"type":"paragraph","text":"Enim occaecat irure excepteur non quis est enim commodo velit reprehenderit cupidatat. Deserunt ex sit et quis nostrud amet elit ullamco. Lorem ea esse laboris cillum minim reprehenderit consectetur enim.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
