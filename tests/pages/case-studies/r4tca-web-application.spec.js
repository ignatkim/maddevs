import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import InternationalTradeCenter from '@/pages/case-studies/R4TCA-web-application'

const DESCRIPTION = 'Digital Transformation Case Study: How to implement digital transformation? Read an ITC\'s story of improving the reports and the coaches\' coordination with a convenient web app.'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
  $lazyLoad: {
    init: jest.fn(),
  },
}

const stubs = ['NuxtLink', 'Main', 'CaseHeader', 'CaseITC']

const META_DATA = {
  description: DESCRIPTION,
  'og:url': 'https://maddevs.io/case-studies/R4TCA-web-application/',
  'og:type': 'website',
  'og:site_name': 'Custom Software Development Company',
  'og:title': 'Mad Devs Case Study: the International Trade Centre (ITC)',
  'og:description': DESCRIPTION,
  'og:image': 'https://maddevs.io/itc-case.jpg',
  'og:image:width': '1200',
  'og:image:height': '630',
  'twitter:card': 'summary_large_image',
  'twitter:text:title': 'Mad Devs Case Study: the International Trade Centre (ITC)',
  'twitter:description': DESCRIPTION,
  'twitter:image:src': 'https://maddevs.io/itc-case.jpg',
  'twitter:url': 'https://maddevs.io/case-studies/R4TCA-web-application/',
  jsonLd: '{"@context": "https://schema.org", "@type": "WebPage", "name": "Mad Devs Case Study: the International Trade Centre (ITC)", "description": "Digital Transformation Case Study: How to implement digital transformation? Read an ITC\'s story of improving the reports and the coaches\' coordination with a convenient web app.", "publisher": {"@type": "ProfilePage", "name": "Mad Devs Group Limited"}}',
}

const directives = {
  'lazy-load': () => {},
}

describe('InternationalTradeCenter root component', () => {
  it('should render correctly', () => {
    const { container } = render(InternationalTradeCenter, {
      mocks,
      stubs,
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct work head method', () => {
    const wrapper = shallowMount(InternationalTradeCenter, {
      mocks,
      stubs,
      directives,
    })

    const actual = wrapper.vm.$options.head.call(wrapper.vm)

    actual.meta.forEach(meta => {
      expect(META_DATA[meta.name] || META_DATA[meta.property]).toBe(meta.content)
    })
  })
})
