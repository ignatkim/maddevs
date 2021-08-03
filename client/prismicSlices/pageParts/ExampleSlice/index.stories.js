import SliceZone from 'vue-slicezone'
import model from './model'
import Slice from '.'

export default {
  title: model.name,
}

export const DefaultSlice = () => ({
  storyName: 'ffff',
  components: {
    Slice,
    SliceZone,
  },
  data() {
    return {
      resolver() {
        return Slice
      },
    }
  },
  template: '<slice-zone :resolver="resolver" />',
})
