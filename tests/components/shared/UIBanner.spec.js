import UIBanner from '@/components/shared/UIBanner'
import { render } from '@testing-library/vue'

describe('UIBanner component', () => {
  it('should render correctly', () => {
    const { container } = render(UIBanner, {
      directives: {
        'lazy-load': () => {},
      },
    })

    expect(container).toMatchSnapshot()
  })
})
