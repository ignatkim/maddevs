import HRContactCard from '@/components/Careers/shared/HRContactCard'
import { render } from '@testing-library/vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const directives = {
  'lazy-load': () => {},
}

describe('HRContactCard', () => {
  it('is a Vue instance', () => {
    const { container } = render(HRContactCard, {
      mocks,
      directives,
    })
    expect(container).toMatchSnapshot()
  })
})
