import CTABanner from '@/components/Careers/CTABanner'
import { render } from '@testing-library/vue'

const stubs = ['UIBanner', 'UIButton']

const directives = {
  'lazy-load': () => {},
}

describe('CTABanner component', () => {
  it('should render correctly', () => {
    const { container } = render(CTABanner, {
      stubs,
      computed: {
        image: () => 'image.png',
      },
      directives,
    })

    expect(container).toMatchSnapshot()
  })
})
