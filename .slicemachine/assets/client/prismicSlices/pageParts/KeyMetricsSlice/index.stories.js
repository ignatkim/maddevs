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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"key_metrics_slice","items":[{"title":"enhance viral functionalities","subtitle":"transition dot-com functionalities"},{"title":"envisioneer value-added interfaces","subtitle":"streamline e-business e-business"},{"title":"deliver frictionless methodologies","subtitle":"deliver cutting-edge deliverables"}],"primary":{"background":"black"},"id":"_DefaultSlice"}
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
      mock: {"variation":"secondVariation","name":"Second variation","slice_type":"key_metrics_slice","items":[{"title":"syndicate back-end bandwidth","subtitle":"generate efficient e-services"},{"title":"orchestrate world-class infomediaries","subtitle":"integrate virtual bandwidth"},{"title":"innovate bleeding-edge functionalities","subtitle":"enhance mission-critical eyeballs"},{"title":"expedite customized ROI","subtitle":"streamline turn-key portals"}],"primary":{"colorTheme":"white","background":"black"},"id":"_SecondVariation"}
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
      mock: {"variation":"thirdVariation","name":"Third variation","slice_type":"key_metrics_slice","items":[{"title":"deliver compelling web services","subtitle":"matrix back-end bandwidth"},{"title":"deploy enterprise interfaces","subtitle":"deliver real-time initiatives"},{"title":"incubate web-enabled solutions","subtitle":"embrace sexy deliverables"}],"primary":{"colorTheme":"white","background":"white"},"id":"_ThirdVariation"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_ThirdVariation.storyName = 'Third variation'
