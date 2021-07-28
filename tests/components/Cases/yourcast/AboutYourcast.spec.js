import AboutYourcast from '@/components/Cases/yourcast/AboutYourcast'
import { render, screen } from '@testing-library/vue'

const stubs = ['NuxtLink', 'TextQuote']

describe('AboutYourcast component', () => {
  it('should render correctly', () => {
    const { container } = render(AboutYourcast, {
      stubs,
    })
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(AboutYourcast, {
      stubs,
    })
    expect(screen.getByText(/OTT-like video streaming platform & online cinema/i).className).toContain('case_title_h2')
  })
})
