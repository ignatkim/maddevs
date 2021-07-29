import Team from '@/components/Cases/itc/Team'
import { render, screen } from '@testing-library/vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('Team component', () => {
  it('should render correctly', () => {
    const { container } = render(Team, {
      mocks,
      stubs: ['Picture'],
    })

    expect(screen.getByText('Meet the team')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
