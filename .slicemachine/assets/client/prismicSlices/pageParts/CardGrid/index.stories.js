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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"card_grid","items":[{"title":"morph seamless models","description":"transform 24/365 e-commerce","btnLink":{"link_type":"Web","url":"http://twitter.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"},"fullWidth":true},{"title":"drive B2B e-markets","description":"morph dynamic metrics","btnLink":{"link_type":"Web","url":"https://prismic.io"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6?w=900&h=500&fit=crop"},"fullWidth":true}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
