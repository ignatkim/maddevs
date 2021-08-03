import OpenPositions from '@/components/Careers/OpenPositions'
import { render } from '@testing-library/vue'

const stubs = ['PositionsFilter', 'PositionsGrid']

const mocks = {
  $t: () => 'translated',
}

describe('OpenPositions component', () => {
  it('should render correctly', () => {
    const { container } = render(OpenPositions, {
      stubs,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})
