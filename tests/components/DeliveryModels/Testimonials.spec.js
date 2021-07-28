import Testimonials from '@/components/DeliveryModels/Testimonials'
import { render } from '@testing-library/vue'

describe('Testimonials component', () => {
  it('should render correctly', () => {
    const { container } = render(Testimonials, {
      stubs: ['TestimonialBlock'],
    })

    expect(container).toMatchSnapshot()
  })
})
