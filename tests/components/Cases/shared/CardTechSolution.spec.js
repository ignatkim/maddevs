import CardTechSolution from '@/components/Cases/shared/CardTechSolution'
import { render, screen } from '@testing-library/vue'

const directives = {
  'lazy-load': () => {},
}

describe('CardTechSolution component', () => {
  const props = {
    icon: 'gear',
    description: 'Adding PgBouncers to reduce the load on the database.',
  }

  it('should render correctly', () => {
    const { container } = render(CardTechSolution, {
      props,
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
      directives,
    })

    expect(screen.getByText(props.description)).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
