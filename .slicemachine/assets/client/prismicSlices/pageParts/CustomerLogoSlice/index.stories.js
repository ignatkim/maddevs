import MyComponent from '../../../../../../client/prismicSlices/pageParts/CustomerLogoSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/CustomerLogoSlice'
}


export const _Default = () => ({
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
      mock: {"variation":"default","name":"Default Slice","slice_type":"customer_logo_slice","items":[{"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=900&h=500&fit=crop"},"link":{"link_type":"Web","url":"http://twitter.com"}},{"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=900&h=500&fit=crop"},"link":{"link_type":"Web","url":"http://google.com"}},{"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=900&h=500&fit=crop"},"link":{"link_type":"Web","url":"http://google.com"}},{"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=900&h=500&fit=crop"},"link":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{"title":"Our valued customers","description":"Due to  our NDAs and confidentiality requirements, we cannot disclose details for all of our customers. These are a few of the companies we work with.","colorTheme":"white","background":"black","buttonText":"See the case studies","buttonLink":{"link_type":"Web","url":"https://maddevs.io/case-studies/"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default Slice'
