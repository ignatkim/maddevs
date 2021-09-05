import { render, screen } from '@testing-library/vue'
import CustomerRatesSlice from '@/prismicSlices/pageParts/CustomerRatesSlice'

const items = [
  {
    title: 'CustomerRates title one',
    subtitle: 'CustomerRatesSlice subtitle one',
  },
  {
    title: 'CustomerRates title one',
    subtitle: 'CustomerRatesSlice subtitle one',
  },
  {
    title: 'CustomerRates title two',
    subtitle: 'CustomerRatesSlice subtitle two',
  },
]

const apiData = {
  animation: 'zoom-in',
  items: [
    {
      title: 'CustomerRates title one',
      subtitle: 'CustomerRatesSlice subtitle one',
    },
    {
      title: 'CustomerRates title two',
      subtitle: 'CustomerRatesSlice subtitle two',
    },
    {
      title: 'CustomerRates title three',
      subtitle: 'CustomerRatesSlice subtitle three',
    },
  ],
}

const getProps = params => ({
  slice: {
    primary: {
      animation: params?.animation,
    },
    items: params?.items,
  },
})

describe('CustomerRates slice', () => {
  it('should render correctly', () => {
    const { container } = render(CustomerRatesSlice, {
      propsData: getProps(apiData),
    })

    items.forEach(item => {
      expect(screen.getByText(item.title))
        .not
        .toBeNull()
      expect(screen.getByText(item.subtitle))
        .not
        .toBeNull()
    })
    expect(container)
      .toMatchSnapshot()
  })
})
