import MyComponent from '../../../../../../client/prismicSlices/pageParts/CustomerTestimonials';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/CustomerTestimonials'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"customer_testimonials","items":[],"primary":{"title":"Customer Testimonials","animation":"none"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
