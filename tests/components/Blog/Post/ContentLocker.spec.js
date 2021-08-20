import 'regenerator-runtime'
import {
  render, fireEvent, screen, waitFor,
} from '@testing-library/vue'
import ContentLocker from '@/components/Blog/Post/ContentLocker'

describe('ContentLocker component', () => {
  it('should correctly render', () => {
    const { container } = render(ContentLocker)

    expect(container).toMatchSnapshot()
  })

  it('should correctly render modal', async () => {
    jest.spyOn(global, 'setTimeout').mockImplementation(handler => handler())
    render(ContentLocker, {
      mocks: {
        $v: {
          name: '',
          $reset: () => {},
          validationGroup: {
            $invalid: false,
          },
        },
      },
      directives: {
        'lazy-load': () => {},
      },
    })

    await fireEvent.scroll(document, { target: { scrollY: 100 } })

    await waitFor(() => {
      const modal = screen.getByTestId('content-locker-modal-content')
      expect(modal).toBeTruthy()
    })
  })
})
