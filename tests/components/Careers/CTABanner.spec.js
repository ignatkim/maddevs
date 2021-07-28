import CTABanner from '@/components/Careers/CTABanner'
import { render } from '@testing-library/vue'

const stubs = ['UIBanner', 'UIButton']

const mocks = {
  $getMediaFromS3: () => 'img.png',
}

describe('CTABanner component', () => {
  it('should render correctly', () => {
    const { container } = render(CTABanner, {
      stubs,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})
