import SliceZone from 'vue-slicezone'

export default {
  title: 'Demo pages',
}

export const About = () => ({
  components: {
    SliceZone,
  },
  template: '<slice-zone type="custom-page" uid="need to paste the uid" />',
})

About.storyName = 'About page'
