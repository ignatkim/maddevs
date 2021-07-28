import ContinuousIntegrationResult from '@/components/Cases/veeqo/ContinuousIntegrationResult'
import { render, screen } from '@testing-library/vue'

const directives = {
  'lazy-load': () => {},
  prlx: () => {},
}

describe('ContinuousIntegrationResult component', () => {
  it('should render correctly', () => {
    const { container } = render(ContinuousIntegrationResult, {
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
      directives,
    })

    expect(screen.getByText('Result')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
