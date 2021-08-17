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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"key_metrics_slice","items":[{"title":"facilitate bleeding-edge e-markets","subtitle":"iterate robust ROI"},{"title":"enhance open-source blockchains","subtitle":"implement bleeding-edge infomediaries"},{"title":"architect vertical infrastructures","subtitle":"enable scalable systems"},{"title":"engage world-class ROI","subtitle":"deploy interactive models"}],"primary":{"colorTheme":"black"},"id":"_DefaultSlice"}
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
      mock: {"variation":"secondVariation","name":"Second variation","slice_type":"key_metrics_slice","items":[{"title":"morph mission-critical relationships","subtitle":"engage proactive infrastructures"},{"title":"matrix B2C blockchains","subtitle":"generate distributed infomediaries"}],"primary":{"colorTheme":"white"},"id":"_SecondVariation"}
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
      mock: {"variation":"thirdVariation","name":"Third variation","slice_type":"key_metrics_slice","items":[{"title":"deploy impactful infrastructures","subtitle":"grow seamless mindshare"},{"title":"repurpose mission-critical experiences","subtitle":"maximize innovative content"},{"title":"brand intuitive action-items","subtitle":"enhance user-centric networks"},{"title":"reintermediate interactive partnerships","subtitle":"incentivize 24/365 paradigms"},{"title":"disintermediate dynamic infrastructures","subtitle":"visualize bricks-and-clicks eyeballs"}],"primary":{"colorTheme":"black"},"id":"_ThirdVariation"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_ThirdVariation.storyName = 'Third variation'
