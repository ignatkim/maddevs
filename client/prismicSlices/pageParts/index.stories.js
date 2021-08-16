import SliceZone from 'vue-slicezone'

export default {
  title: 'Demo pages',
}

export const About = () => ({
  components: {
    SliceZone,
  },
  template: '<slice-zone type="custom_page" uid="demo-about-page" />',
})

About.storyName = 'About page'
