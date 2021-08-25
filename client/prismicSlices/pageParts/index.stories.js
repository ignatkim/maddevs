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

export const TeamPage = () => ({
  components: {
    SliceZone,
  },
  template: '<slice-zone type="custom_page" uid="demo-team-page" />',
})

TeamPage.storyName = 'Team page'

export const PolicyPage = () => ({
  components: {
    SliceZone,
  },
  template: '<slice-zone type="custom_page" uid="demo-policy-page" />',
})

PolicyPage.storyName = 'Policy page'
