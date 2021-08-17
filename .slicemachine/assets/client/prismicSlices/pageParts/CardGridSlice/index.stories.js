import MyComponent from '../../../../../../client/prismicSlices/pageParts/CardGridSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/CardGridSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"card_grid_slice","items":[{"title":"deliver cross-media solutions","description":"disintermediate bleeding-edge content","btnLink":{"link_type":"Web","url":"https://slicemachine.dev"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=900&h=500&fit=crop"},"fullWidth":true},{"title":"e-enable killer users","description":"engage cutting-edge interfaces","btnLink":{"link_type":"Web","url":"https://prismic.io"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=900&h=500&fit=crop"},"fullWidth":true}],"primary":{"colorTheme":"black"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
