import { render } from '@testing-library/vue'
import List from '@/components/Cases/shared/List'

const slots = {
  default: '<li>List item</li>',
}

describe('List component', () => {
  it('should render correctly', () => {
    const { container } = render(List, {
      slots,
    })

    expect(container).toMatchSnapshot()
  })

  it('should have correct data in slot', () => {
    const { html } = render(List, {
      slots,
    })
    expect(html()).toContain(slots.default)
  })
})
