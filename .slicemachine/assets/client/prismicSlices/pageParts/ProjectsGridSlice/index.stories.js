import MyComponent from '../../../../../../client/prismicSlices/pageParts/ProjectsGridSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/ProjectsGridSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"projects_grid_slice","items":[{"link":{"link_type":"Web","url":"http://google.com"},"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=900&h=500&fit=crop"},"name":"implement best-of-breed metrics","description":"cultivate magnetic partnerships"},{"link":{"link_type":"Web","url":"http://twitter.com"},"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=900&h=500&fit=crop"},"name":"iterate web-enabled web services","description":"aggregate value-added mindshare"},{"link":{"link_type":"Web","url":"https://slicemachine.dev"},"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=900&h=500&fit=crop"},"name":"recontextualize out-of-the-box eyeballs","description":"iterate transparent technologies"}],"primary":{"colorTheme":"black","displayCardButton":true,"animation":"none"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
