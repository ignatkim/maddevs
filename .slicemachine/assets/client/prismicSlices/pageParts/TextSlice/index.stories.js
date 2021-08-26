import MyComponent from '../../../../../../client/prismicSlices/pageParts/TextSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/TextSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_slice","items":[],"primary":{"text":"A few listed projects to show the diversity of our community participant roster and some of the promising concepts that are emerging in development technologies.","colorTheme":"white","maxWidth":"1028px"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _Title = () => ({
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
      mock: {"variation":"title","name":"Title","slice_type":"text_slice","items":[],"primary":{"colorTheme":"white","title":"Featured projects","tag":"h6","maxWidth":"1028px","position":"center","animation":"fade-up-right","size-xl":"xl","size-xs":"lg","size-lg":"md","size-md":"sm","size-sm":"xs"},"id":"_Title"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Title.storyName = 'Title'

export const _TitleText = () => ({
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
      mock: {"variation":"titleText","name":"Title + Text","slice_type":"text_slice","items":[],"primary":{"title":"Featured projects","text":"A few listed projects to show the diversity of our community participant roster and some of the promising concepts that are emerging in development technologies.","colorTheme":"white","maxWidth":"1028px"},"id":"_TitleText"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TitleText.storyName = 'Title + Text'

export const _TitleTextButton = () => ({
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
      mock: {"variation":"titleTextButton","name":"Title + Text + Button","slice_type":"text_slice","items":[],"primary":{"title":"Featured projects","text":"A few listed projects to show the diversity of our community participant roster and some of the promising concepts that are emerging in development technologies.","buttonText":"Get presentation","buttonLink":{"link_type":"Web","url":"https://maddevs.co/delivery-models.pdf"},"colorTheme":"white","maxWidth":"1028px"},"id":"_TitleTextButton"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TitleTextButton.storyName = 'Title + Text + Button'

export const _TitleTextList = () => ({
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
      mock: {"variation":"titleTextList","name":"Title + Text + List","slice_type":"text_slice","items":[{"listItem":"integrate distributed blockchains"},{"listItem":"generate virtual e-services"},{"listItem":"engage best-of-breed technologies"},{"listItem":"unleash vertical metrics"},{"listItem":"extend bleeding-edge convergence"}],"primary":{"title":"Software <br /> development","text":"A few listed projects to show the diversity of our community participant roster and some of the promising concepts that are emerging in development technologies.","colorTheme":"white","maxWidth":"1028px"},"id":"_TitleTextList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TitleTextList.storyName = 'Title + Text + List'

export const _TitleH5 = () => ({
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
      mock: {"variation":"titleH5","name":"Title H5","slice_type":"text_slice","items":[],"primary":{"title":"We encourage the best practices in sustainability","colorTheme":"white","maxWidth":"engineer visionary ROI"},"id":"_TitleH5"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TitleH5.storyName = 'Title H5'

export const _TitleH5Text = () => ({
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
      mock: {"variation":"titleH5Text","name":"Title H5 + Text","slice_type":"text_slice","items":[],"primary":{"title":"We encourage the best practices in sustainability","text":"Mad Devs takes full responsibility for the projects we have been involved in. It includes not only the quality of a product but also the responsibility toward the environment and people.  Therefore, the environmental and social sustainability compliances form a crucial component of our business strategy. We are committed to comply with legal regulations and official requirements and encourage the best sustainability practices. We understand sustainability as a path to continuous improvement of our processes and services for the purposes of environmental protection, the provision of occupational health, and meeting safety requirements. ","colorTheme":"black","maxWidth":"unleash sticky schemas"},"id":"_TitleH5Text"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TitleH5Text.storyName = 'Title H5 + Text'

export const _RedTextSimpleTextMedium = () => ({
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
      mock: {"variation":"redTextSimpleTextMedium","name":"Red Text + Simple Text Medium","slice_type":"text_slice","items":[],"primary":{"title":"matrix clicks-and-mortar applications","text":"engineer rich convergence","colorTheme":"white","maxWidth":"seize plug-and-play partnerships"},"id":"_RedTextSimpleTextMedium"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RedTextSimpleTextMedium.storyName = 'Red Text + Simple Text Medium'

export const _SimpleTextMedium = () => ({
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
      mock: {"variation":"simpleTextMedium","name":"Simple Text Medium","slice_type":"text_slice","items":[],"primary":{"text":"We build our sustainability efforts around three primary areas: social, economic, and ecological sustainability.","colorTheme":"black","maxWidth":"engage e-business relationships"},"id":"_SimpleTextMedium"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_SimpleTextMedium.storyName = 'Simple Text Medium'

export const _Paragraph = () => ({
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
      mock: {"variation":"paragraph","name":"Paragraph","slice_type":"text_slice","items":[],"primary":{"colorTheme":"black","text":"leverage value-added markets","maxWidth":"envisioneer B2C architectures","position":"left","type":"default","animation":"fade-up-right","size-xl":"xl","size-xs":"xs","size-lg":"sm","size-md":"xs","size-sm":"md"},"id":"_Paragraph"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Paragraph.storyName = 'Paragraph'
