import { render } from '@testing-library/vue'
import Index from '@/pages/careers/index'

const mocks = {
  $lazyLoad: {
    init: jest.fn(),
  },
  featureFlag: jest.fn(),
  $route: {
    path: jest.fn(),
  },
  $t: () => 'translated',
  $i18n: {
    locale: 'en',
  },
}

const stubs = ['Main']

describe('Index page', () => {
  it('should render correctly', () => {
    const { container } = render(Index, {
      mocks,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
