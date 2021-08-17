import MyComponent from '../../../../../../client/prismicSlices/pageParts/ProjectStartSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/ProjectStartSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"project_start_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Facilitate bleeding-edge solutions","spans":[]}],"description":[{"type":"paragraph","text":"Dolore ad et pariatur amet aliqua anim sunt officia ea aliquip qui eu Lorem mollit. Aliqua reprehenderit voluptate dolore eu.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
