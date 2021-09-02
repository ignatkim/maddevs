import { render, screen } from '@testing-library/vue'
import StartScreen from '@/prismicSlices/pageParts/StartScreen'

// const background = {
//   white: '#fff',
//   black: '#111213',
//   grey: '#f5f7f9',
// }

// const gradient = {
//   black: 'linear-gradient(180deg, rgba(17, 18, 19, 0) 60%, #111213)',
//   white: 'linear-gradient(180deg, rgba(17, 18, 19, 0) 60%, #fff)',
//   grey: 'linear-gradient(180deg, rgba(17, 18, 19, 0) 60%, #f5f7f9)',
// }

const apiData = {
  background: 'black',
  gradientColor: 'black',
  image: {
    url: 'url',
    alt: 'alt',
  },
  imageOpacity: 0.3,
  title: 'StartScreen title',
  subtitle: 'StartScreen subtitle',
}

const getProps = params => ({
  slice: {
    primary: {
      ...params,
    },
  },
})

describe('StartScreen slice', () => {
  it('should render correctly with data', () => {
    const { container } = render(StartScreen, {
      props: getProps(apiData),
    })

    expect(screen.getByText(apiData.title)).not.toBeNull()
    expect(screen.getByText(apiData.subtitle)).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should render correctly without data', () => {
    const { container } = render(StartScreen, {
      props: getProps({}),
    })

    expect(screen.queryByTestId('start-screen-slice__title')).not.toBeNull()
    expect(screen.queryByTestId('start-screen-slice__subtitle')).toBeNull()
    expect(container).toMatchSnapshot()
  })
})
