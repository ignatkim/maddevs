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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"projects_grid_slice","items":[{"link":{"link_type":"Web","url":"http://google.com"},"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=900&h=500&fit=crop"},"name":"productize dot-com models","description":"brand wireless eyeballs"},{"link":{"link_type":"Web","url":"http://twitter.com"},"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=900&h=500&fit=crop"},"name":"visualize cutting-edge metrics","description":"facilitate seamless niches"},{"link":{"link_type":"Web","url":"http://google.com"},"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6?w=900&h=500&fit=crop"},"name":"drive ubiquitous action-items","description":"benchmark dot-com methodologies"}],"primary":{"colorTheme":"black","displayCardButton":true},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
