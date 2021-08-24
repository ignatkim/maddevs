import MyComponent from '../../../../../../client/prismicSlices/pageParts/CtaBannerSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/CtaBannerSlice'
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
      mock: {"variation":"default","name":"Default Slice","slice_type":"cta_banner_slice","items":[],"primary":{"image":{"dimensions":{"width":null,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=null&h=500&fit=crop"},"btnLink":{"link_type":"Web","url":"http://google.com"},"title":"embrace customized portals","description":"productize 24/365 schemas","btnText":"syndicate 24/365 solutions","name":"f","position":"aggregate transparent e-business","animation":"none"},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default Slice'
