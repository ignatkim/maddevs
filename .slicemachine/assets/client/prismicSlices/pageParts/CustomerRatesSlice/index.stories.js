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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"customer_rates_slice","items":[{"title":"incentivize dynamic relationships","subtitle":"visualize dynamic eyeballs"},{"title":"matrix granular mindshare","subtitle":"maximize interactive infomediaries"},{"title":"transform transparent supply-chains","subtitle":"empower world-class synergies"}],"primary":{"background":"black"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
