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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"card_grid_slice","items":[{"title":"envisioneer open-source e-business","description":"mesh sexy e-tailers","btnLink":{"link_type":"Web","url":"https://slicemachine.dev"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=900&h=500&fit=crop"},"fullWidth":false},{"title":"synergize efficient mindshare","description":"seize viral paradigms","btnLink":{"link_type":"Web","url":"https://slicemachine.dev"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1571126770897-2d612d1f7b89?w=900&h=500&fit=crop"},"fullWidth":false},{"title":"productize world-class markets","description":"enhance extensible eyeballs","btnLink":{"link_type":"Web","url":"https://slicemachine.dev"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6?w=900&h=500&fit=crop"},"fullWidth":true},{"title":"grow interactive bandwidth","description":"transition intuitive channels","btnLink":{"link_type":"Web","url":"https://slicemachine.dev"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=900&h=500&fit=crop"},"fullWidth":true},{"title":"deploy ubiquitous platforms","description":"embrace real-time technologies","btnLink":{"link_type":"Web","url":"https://prismic.io"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=900&h=500&fit=crop"},"fullWidth":true}],"primary":{"colorTheme":"white"},"id":"_DefaultSlice"}
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
      mock: {"variation":"cardGridWithList","name":"Card Grid With List","slice_type":"card_grid_slice","items":[{"title":"innovate e-business technologies","description":[{"type":"paragraph","text":"Mollit culpa commodo id labore aute incididunt dolore. Eiusmod labore adipisicing sit ullamco.","spans":[]}],"list":"Occaecat voluptate nostru, Velit esse incididunt, Lorem consequat culpa esse, Dolor occaecat proident","fullWidth":false},{"title":"grow 24/365 platforms","description":[{"type":"paragraph","text":"Minim ut amet ut in velit sunt aute minim aliqua.","spans":[]}],"list":"Occaecat voluptate nostru, Velit esse incididunt, Lorem consequat culpa esse, Dolor occaecat proident","fullWidth":true},{"title":"iterate distributed e-services","description":[{"type":"paragraph","text":"Ut consectetur cupidatat aute exercitation ipsum est veniam in incididunt laborum deserunt occaecat ea laboris enim. In velit consectetur amet fugiat esse aliquip et do aliquip do dolore qui velit laboris fugiat.","spans":[]}],"list":"Occaecat voluptate nostru, Velit esse incididunt, Lorem consequat culpa esse, Dolor occaecat proident","fullWidth":false},{"title":"target viral channels","description":[{"type":"paragraph","text":"In nostrud sunt esse fugiat qui. Exercitation dolore esse ipsum proident cupidatat anim.","spans":[]}],"list":"Occaecat voluptate nostru, Velit esse incididunt, Lorem consequat culpa esse, Dolor occaecat proident","fullWidth":true},{"title":"drive ubiquitous solutions","description":[{"type":"paragraph","text":"Laboris consectetur excepteur labore eu proident labore laborum sint esse tempor excepteur duis ad exercitation. Lorem ad ipsum cupidatat ad duis sint laborum commodo nostrud labore irure proident.","spans":[]}],"list":"Occaecat voluptate nostru, Velit esse incididunt, Lorem consequat culpa esse, Dolor occaecat proident","fullWidth":false},{"title":"syndicate killer platforms","description":[{"type":"paragraph","text":"Pariatur nisi eu minim laborum esse veniam non veniam laborum culpa.","spans":[]}],"list":"Occaecat voluptate nostru, Velit esse incididunt, Lorem consequat culpa esse, Dolor occaecat proident","fullWidth":true}],"primary":{"colorTheme":"white"},"id":"_CardGridWithList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_CardGridWithList.storyName = 'Card Grid With List'
