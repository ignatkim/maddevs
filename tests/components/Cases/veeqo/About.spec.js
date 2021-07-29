import About from '@/components/Cases/veeqo/About'
import { render } from '@testing-library/vue'

const stubs = ['TextQuote']

describe('About component', () => {
  it('should render correctly', () => {
    const { container } = render(About, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
