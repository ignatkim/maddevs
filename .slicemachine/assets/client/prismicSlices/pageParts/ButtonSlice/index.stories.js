import MyComponent from '../../../../../../client/prismicSlices/pageParts/ButtonSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/ButtonSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"button_slice","items":[],"primary":{"fullWidth":true,"alignment":"right","text":"empower world-class eyeballs","link":{"link_type":"Web","url":"https://prismic.io"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _OutlinedButton = () => ({
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
      mock: {"variation":"outlinedButton","name":"Outlined Button","slice_type":"button_slice","items":[],"primary":{"fullWidth":false,"alignment":"left","color":"grey","text":"e-enable e-business action-items","link":{"link_type":"Web","url":"http://twitter.com"}},"id":"_OutlinedButton"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_OutlinedButton.storyName = 'Outlined Button'

export const _LinkButton = () => ({
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
      mock: {"variation":"linkButton","name":"Link Button","slice_type":"button_slice","items":[],"primary":{"fullWidth":false,"alignment":"right","color":"grey","text":"seize sticky e-commerce","link":{"link_type":"Web","url":"http://google.com"}},"id":"_LinkButton"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_LinkButton.storyName = 'Link Button'
