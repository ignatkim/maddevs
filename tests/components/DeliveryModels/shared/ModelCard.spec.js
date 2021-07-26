import ModelCard from '@/components/DeliveryModels/shared/ModelCard'
import { render } from '@testing-library/vue'

const props = {
  full: false,
  uid: 'uid',
  title: 'title',
  animationName: 'staff',
  startAnimationOnScreenPercent: 23,
}

const stubs = ['NuxtLink']

describe('ModelCard component', () => {
  it('should render correctly', () => {
    const { container } = render(ModelCard, {
      stubs,
      props,
    })

    expect(container).toMatchSnapshot()
  })
})
