import ProjectsCountries from '@/components/Careers/ProjectsCountries'
import { render } from '@testing-library/vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
  $t: () => 'translated',
}

const stubs = ['UICustomersList', 'UILinkButton']

const directives = {
  'lazy-load': () => {},
}

describe('ProjectsCountries component', () => {
  it('should render correctly', () => {
    const { container } = render(ProjectsCountries, {
      mocks,
      stubs,
      directives,
    })

    expect(container).toMatchSnapshot()
  })
})
