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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"card_grid_slice","items":[{"title":"extend one-to-one web-readiness","description":"aggregate mission-critical portals","btnLink":{"link_type":"Web","url":"https://prismic.io"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=900&h=500&fit=crop"},"fullWidth":false},{"title":"scale transparent schemas","description":"strategize revolutionary schemas","btnLink":{"link_type":"Web","url":"https://prismic.io"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=900&h=500&fit=crop"},"fullWidth":true},{"title":"monetize cutting-edge content","description":"optimize compelling supply-chains","btnLink":{"link_type":"Web","url":"http://google.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=900&h=500&fit=crop"},"fullWidth":true},{"title":"harness robust action-items","description":"facilitate ubiquitous deliverables","btnLink":{"link_type":"Web","url":"https://slicemachine.dev"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=900&h=500&fit=crop"},"fullWidth":false}],"primary":{"colorTheme":"black","animation":"none"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _CardGridWithList = () => ({
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
      mock: {"variation":"cardGridWithList","name":"Card Grid With List","slice_type":"card_grid_slice","items":[{"title":"exploit customized portals","description":[{"type":"paragraph","text":"Esse ex ipsum fugiat ea aliqua laborum incididunt esse ex consectetur eu occaecat aliqua. Nulla irure dolore nulla proident magna nostrud magna sunt est. Cillum duis est deserunt ea.","spans":[]}],"list":"morph distributed paradigms","fullWidth":true},{"title":"monetize cross-media supply-chains","description":[{"type":"paragraph","text":"Minim irure ad laborum eu sint qui.","spans":[]}],"list":"leverage global portals","fullWidth":false},{"title":"benchmark bricks-and-clicks web services","description":[{"type":"paragraph","text":"Reprehenderit consectetur eiusmod adipisicing cillum eiusmod adipisicing quis minim dolor esse ut. Velit aliqua cillum eiusmod velit magna veniam sit esse laboris eu irure commodo incididunt reprehenderit. Ut ad excepteur quis deserunt qui mollit officia veniam velit excepteur.","spans":[]}],"list":"matrix sexy metrics","fullWidth":true},{"title":"orchestrate robust supply-chains","description":[{"type":"paragraph","text":"Tempor pariatur esse mollit laborum id. Magna ipsum nulla qui dolore est do deserunt minim Lorem voluptate excepteur adipisicing occaecat nostrud et.","spans":[]}],"list":"implement rich action-items","fullWidth":true}],"primary":{"colorTheme":"black","animation":"none"},"id":"_CardGridWithList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_CardGridWithList.storyName = 'Card Grid With List'
