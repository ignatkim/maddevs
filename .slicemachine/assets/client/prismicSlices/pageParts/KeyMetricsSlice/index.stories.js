import MyComponent from '../../../../../../client/prismicSlices/pageParts/KeyMetricsSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/KeyMetricsSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"key_metrics_slice","items":[{"title":"deliver B2B initiatives","subtitle":"leverage B2C portals"},{"title":"drive back-end initiatives","subtitle":"revolutionize collaborative interfaces"},{"title":"generate innovative web-readiness","subtitle":"evolve scalable deliverables"},{"title":"benchmark revolutionary e-commerce","subtitle":"extend rich users"}],"primary":{"colorTheme":"white"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _WithTopTitle = () => ({
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
      mock: {"variation":"withTopTitle","name":"With Top Title","slice_type":"key_metrics_slice","items":[{"title":"redefine clicks-and-mortar experiences","subtitle":"harness intuitive channels"},{"title":"exploit user-centric systems","subtitle":"integrate extensible vortals"},{"title":"transition sticky partnerships","subtitle":"extend dot-com e-commerce"}],"primary":{"colorTheme":"white"},"id":"_WithTopTitle"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_WithTopTitle.storyName = 'With Top Title'
