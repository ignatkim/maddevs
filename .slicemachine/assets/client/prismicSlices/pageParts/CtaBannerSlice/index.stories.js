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
      mock: {"variation":"default","name":"Default Slice","slice_type":"cta_banner_slice","items":[],"primary":{"image":{"dimensions":{"width":null,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=null&h=500&fit=crop"},"btnLink":{"link_type":"Web","url":"https://slicemachine.dev"},"title":"matrix open-source initiatives","description":"extend sexy e-business","btnText":"whiteboard granular infomediaries","name":"f","position":"seize transparent methodologies"},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default Slice'
