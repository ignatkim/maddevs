import Challenges from '@/components/Cases/itc/Challenges'
import { render } from '@testing-library/vue'

const stubs = ['CardTechSolution', 'Picture']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('Challenges component', () => {
  it('should render correctly', () => {
    const { container } = render(Challenges, {
      stubs,
      mocks,
      directives: {
        prlx: () => {},
      },
    })

    expect(container).toMatchSnapshot()
  })
})
