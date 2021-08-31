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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"key_metrics_slice","items":[{"title":"implement 24/365 channels","subtitle":"disintermediate 24/7 infrastructures"},{"title":"productize sexy portals","subtitle":"productize robust channels"},{"title":"generate impactful partnerships","subtitle":"implement real-time bandwidth"},{"title":"architect back-end relationships","subtitle":"incentivize cross-platform technologies"},{"title":"exploit granular channels","subtitle":"productize collaborative metrics"}],"primary":{"background":"black","animation":"none"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _SecondVariation = () => ({
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
      mock: {"variation":"secondVariation","name":"Second variation","slice_type":"key_metrics_slice","items":[{"title":"facilitate sexy networks","subtitle":"streamline impactful ROI"},{"title":"strategize clicks-and-mortar bandwidth","subtitle":"unleash cutting-edge channels"},{"title":"generate turn-key e-markets","subtitle":"envisioneer 24/365 architectures"},{"title":"target viral supply-chains","subtitle":"iterate compelling mindshare"}],"primary":{"colorTheme":"white","background":"black"},"id":"_SecondVariation"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_SecondVariation.storyName = 'Second variation'

export const _ThirdVariation = () => ({
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
      mock: {"variation":"thirdVariation","name":"Third variation","slice_type":"key_metrics_slice","items":[{"title":"redefine out-of-the-box e-tailers","subtitle":"disintermediate 24/365 portals"},{"title":"disintermediate efficient models","subtitle":"e-enable viral vortals"},{"title":"harness real-time supply-chains","subtitle":"maximize customized metrics"}],"primary":{"colorTheme":"white","background":"black"},"id":"_ThirdVariation"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_ThirdVariation.storyName = 'Third variation'
