import SliceZone from 'vue-slicezone'
import model from './model'
import mocks from './mocks.json'
import Slice from '.'

export default {
  title: model.name,
}

export const Default = () => ({
  components: {
    Slice,
    SliceZone,
  },
  data() {
    return {
      mock: mocks[0],
      resolver() {
        return Slice
      },
    }
  },
  template: '<slice-zone :slices="[ mock ]" :resolver="resolver" />',
})

Default.storyName = mocks[0].name
