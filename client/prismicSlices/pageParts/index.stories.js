import SliceZone from 'vue-slicezone'

export default {
  title: 'Demo pages',
}

export const Default = () => ({
  components: {
    SliceZone,
  },
  template: '<slice-zone type="custom-page" uid="need to paste the uid" />',
})

Default.storyName = 'About page'
