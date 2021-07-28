import PhaseContinuousIntegration from '@/components/Cases/veeqo/PhaseContinuousIntegration'
import { render, screen } from '@testing-library/vue'

const stubs = ['Picture', 'TextQuote']

describe('PhaseContinuousIntegration component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseContinuousIntegration, {
      stubs,
    })

    expect(screen.getByText('Phase 2: Continuous integration (CI)')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
