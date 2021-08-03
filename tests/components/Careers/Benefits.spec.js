import Benefits from '@/components/Careers/Benefits'
import { render } from '@testing-library/vue'

const mocks = {
  $t: () => 'translated',
}

describe('Benefits component', () => {
  it('should render correctly', () => {
    const { container } = render(Benefits, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})
