import FooterSocialNetworks from '@/components/core/Footer/FooterSocialNetworks'
import { render } from '@testing-library/vue'

const directives = {
  'lazy-load': () => {},
}

describe('FooterSocialNetworks component', () => {
  it('should render correctly', () => {
    const { container } = render(FooterSocialNetworks, {
      directives,
    })

    expect(container).toMatchSnapshot()
  })
})
