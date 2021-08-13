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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"projects_grid_slice","items":[{"link":{"link_type":"Web","url":"https://prismic.io"},"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=900&h=500&fit=crop"},"name":"implement customized web-readiness","description":"utilize innovative blockchains"},{"link":{"link_type":"Web","url":"https://slicemachine.dev"},"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=900&h=500&fit=crop"},"name":"leverage out-of-the-box architectures","description":"streamline synergistic platforms"},{"link":{"link_type":"Web","url":"https://slicemachine.dev"},"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=500&fit=crop"},"name":"harness impactful infomediaries","description":"extend wireless networks"},{"link":{"link_type":"Web","url":"https://prismic.io"},"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=900&h=500&fit=crop"},"name":"repurpose leading-edge initiatives","description":"synthesize leading-edge convergence"}],"primary":{"colorTheme":"black","displayCardButton":true,"title":"brand real-time experiences","subtitle":"enable enterprise e-commerce","buttonText":"expedite impactful bandwidth","buttonLink":{"link_type":"Web","url":"http://twitter.com"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
