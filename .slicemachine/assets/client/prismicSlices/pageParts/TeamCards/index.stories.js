import MyComponent from '../../../../../../client/prismicSlices/pageParts/TeamCards';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/TeamCards'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"team_cards","items":[{"name":"exploit global architectures","position":"evolve compelling e-services","linkedin":{"link_type":"Web","url":"http://google.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=900&h=500&fit=crop"}},{"name":"transition proactive models","position":"e-enable real-time infomediaries","linkedin":{"link_type":"Web","url":"http://google.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=900&h=500&fit=crop"}},{"name":"disintermediate bricks-and-clicks niches","position":"leverage plug-and-play action-items","linkedin":{"link_type":"Web","url":"http://twitter.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1606248897732-2c5ffe759c04?w=900&h=500&fit=crop"}}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
