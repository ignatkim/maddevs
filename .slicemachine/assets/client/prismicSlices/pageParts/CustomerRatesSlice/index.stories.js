import MyComponent from '../../../../../../client/prismicSlices/pageParts/CustomerRatesSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/CustomerRatesSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"customer_rates_slice","items":[{"title":"seize one-to-one e-commerce","subtitle":"envisioneer interactive systems"},{"title":"reintermediate dot-com deliverables","subtitle":"facilitate magnetic experiences"},{"title":"visualize end-to-end relationships","subtitle":"transform next-generation e-commerce"},{"title":"mesh global blockchains","subtitle":"unleash intuitive applications"}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
