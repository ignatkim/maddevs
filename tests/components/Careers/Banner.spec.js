import Banner from '@/components/Careers/Banner'
import { render } from '@testing-library/vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
  $t: () => 'translated',
}

const store = {
  getters: {
    currentLanguage: () => 'en',
  },
}

describe('Banner component', () => {
  it('should render correctly', () => {
    const { container } = render(Banner, {
      mocks,
      store,
    })

    expect(container).toMatchSnapshot()
  })
})
