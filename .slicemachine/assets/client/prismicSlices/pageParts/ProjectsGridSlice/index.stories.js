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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"projects_grid_slice","items":[{"link":{"link_type":"Web","url":"https://prismic.io"},"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=900&h=500&fit=crop"},"name":"transform ubiquitous action-items","description":"seize interactive convergence","displayArrowButton":false},{"link":{"link_type":"Web","url":"http://google.com"},"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=900&h=500&fit=crop"},"name":"enhance out-of-the-box vortals","description":"synergize open-source niches","displayArrowButton":false},{"link":{"link_type":"Web","url":"http://google.com"},"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"},"name":"cultivate sexy niches","description":"deliver sticky technologies","displayArrowButton":false},{"link":{"link_type":"Web","url":"http://google.com"},"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=900&h=500&fit=crop"},"name":"envisioneer real-time eyeballs","description":"disintermediate proactive partnerships","displayArrowButton":false},{"link":{"link_type":"Web","url":"http://google.com"},"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=900&h=500&fit=crop"},"name":"redefine bricks-and-clicks networks","description":"harness robust web-readiness","displayArrowButton":true}],"primary":{"colorTheme":"black","title":"innovate impactful infomediaries","subtitle":"e-enable distributed architectures","buttonText":"expedite dot-com deliverables","buttonLink":{"link_type":"Web","url":"http://google.com"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
