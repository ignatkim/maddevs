import PositionsGridItem from '@/components/Careers/shared/PositionsGridItem'
import PositionsGrid from '@/components/Careers/shared/PositionsGrid'
import { render } from '@testing-library/vue'

const stubs = ['NuxtLink']

describe('PositionsGridItem component', () => {
  it('should render correctly', () => {
    const { container } = render(PositionsGridItem, {
      stubs,
      parentComponent: PositionsGrid,
    })

    expect(container).toMatchSnapshot()
  })
})
