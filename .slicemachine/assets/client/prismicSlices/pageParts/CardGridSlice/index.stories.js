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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"card_grid_slice","items":[{"title":"evolve impactful partnerships","description":"drive value-added technologies","btnLink":{"link_type":"Web","url":"https://slicemachine.dev"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=900&h=500&fit=crop"},"fullWidth":true},{"title":"target one-to-one web-readiness","description":"empower proactive users","btnLink":{"link_type":"Web","url":"http://twitter.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=900&h=500&fit=crop"},"fullWidth":false},{"title":"enhance efficient paradigms","description":"iterate proactive architectures","btnLink":{"link_type":"Web","url":"https://prismic.io"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=900&h=500&fit=crop"},"fullWidth":false},{"title":"morph visionary experiences","description":"engineer efficient vortals","btnLink":{"link_type":"Web","url":"https://prismic.io"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=900&h=500&fit=crop"},"fullWidth":false},{"title":"recontextualize killer technologies","description":"enhance virtual paradigms","btnLink":{"link_type":"Web","url":"https://slicemachine.dev"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=900&h=500&fit=crop"},"fullWidth":true},{"title":"redefine dynamic action-items","description":"recontextualize enterprise technologies","btnLink":{"link_type":"Web","url":"http://google.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=900&h=500&fit=crop"},"fullWidth":true}],"primary":{"colorTheme":"white"},"id":"_DefaultSlice"}
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
      mock: {"variation":"cardGridWithList","name":"Card Grid With List","slice_type":"card_grid_slice","items":[{"title":"exploit synergistic synergies","description":[{"type":"paragraph","text":"Cupidatat eu tempor magna veniam Lorem aute. Reprehenderit minim nostrud laborum laborum deserunt non do dolore dolor. Deserunt cillum adipisicing sit deserunt incididunt dolor duis ullamco fugiat in nostrud eu.","spans":[]}],"list":"matrix scalable action-items","fullWidth":false},{"title":"incubate B2B eyeballs","description":[{"type":"paragraph","text":"Veniam ea sunt commodo ullamco do irure laboris amet laborum. Nostrud ut labore eiusmod sint excepteur anim nostrud nostrud tempor voluptate consequat eiusmod pariatur do.","spans":[]}],"list":"redefine interactive applications","fullWidth":true},{"title":"maximize B2C metrics","description":[{"type":"paragraph","text":"Cillum eiusmod Lorem veniam elit est ipsum consectetur proident minim est. Qui exercitation cupidatat proident dolor do esse anim minim irure velit. Voluptate mollit ex et elit amet consequat cillum veniam cupidatat.","spans":[]}],"list":"aggregate intuitive networks","fullWidth":true},{"title":"envisioneer B2C relationships","description":[{"type":"paragraph","text":"Cupidatat dolor pariatur consequat nulla ipsum consectetur commodo. Mollit Lorem qui proident consectetur cupidatat occaecat labore voluptate minim cupidatat culpa minim sunt.","spans":[]}],"list":"envisioneer value-added supply-chains","fullWidth":true}],"primary":{"colorTheme":"white"},"id":"_CardGridWithList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_CardGridWithList.storyName = 'Card Grid With List'
