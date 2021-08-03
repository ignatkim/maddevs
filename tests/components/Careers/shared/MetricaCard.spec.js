import KeyMetrics from '@/components/Careers/KeyMetrics'
import { render } from '@testing-library/vue'

const mocks = {
  $t: () => 'translated',
}

describe('KeyMetrics component', () => {
  it('should render correctly', () => {
    const { container } = render(KeyMetrics, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})
