import axios from 'axios'

const EXCLUDE_ROUTES = {
  '/': 1,
  '/gdpr': 0.7,
  '/nda': 0.7,
  '/privacy': 0.7,
  '/faq': 0.7,
}

const IGNORE_ROUTES = [
  '/blog/tag/featured-post',
  '/blog/tag/copywriter',
  '/blog/tag/marketing',
  '/blog/tag/it',
  '/blog/tag/python',
  '/blog/tag/django',
  '/blog/tag/go',
  '/blog/tag/golang',
  '/blog/tag/ios',
  '/blog/tag/hr',
  '/blog/tag/assistant',
  '/blog/tag/hr-department',
  '/blog/tag/assistant-delivery-manager',
  '/blog/tag/software-features',
  '/blog/mad-devs-devops',
  '/mad-devs-ishet-golang-razrabotchika',
  '/blog/middle-python-developer',
  '/blog/vue-vuetify-middle-v-saas-proekt',
  '/blog/senior-android-developer',
  '/blog/project-manager-v-finteh-proekt',
  '/blog/middle-ios-developer',
  '/blog/golang-middle-senior-developer-v-finteh-proekt',
  '/blog/senior-ios-developer',
  '/blog/mad-devs-ishet-senior-python-developer-v-proekt-clutch',
  '/blog/middle-android-developer',
  '/blog/ios-middle-senior-developer-v-finteh-proekt',
  '/blog/it-recruiter-middle-maddevs',
  '/blog/mad-devs-ishet-golang-razrabotchika',
]

const getRoutes = async () => {
  const getPosts = async pageUrl => {
    let posts = []
    const response = await axios.get(pageUrl)
    posts = posts.concat(response.data.results)

    if (response.data.next_page) {
      posts = posts.concat(await getPosts(response.data.next_page))
    }
    return posts
  }
  const convertToSlug = text => text.toLowerCase()
    .trim()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')

  // Getting data from prismic
  const prismicData = await axios.get(process.env.NODE_PRISMIC_API)
  const prismicTags = prismicData.data.tags

  // Getting posts of all types from prismic
  const { ref } = prismicData.data.refs[0]
  const prismicPosts = await getPosts(`${process.env.NODE_PRISMIC_API}/documents/search?ref=${ref}#format=json`)

  // Creating a list of routes
  const blogPageRoutes = prismicPosts
    .filter(post => post.type === 'post')
    .map(post => `/blog/${post.uid}`)

  const cuPageRoutes = prismicPosts
    .filter(post => post.type === 'customer_university')
    .map(post => `/customer-university/${post.uid}`)

  const authorPageRoutes = prismicPosts
    .filter(post => post.type === 'author')
    .map(author => `/blog/author/${author.uid}`)

  const careerPageRoutes = prismicPosts
    .filter(post => post.type === 'vacancy')
    .map(vacancy => `/ru/careers/${vacancy.uid}`)

  const tagPageRoutes = prismicTags
    .map(tag => `/blog/tag/${convertToSlug(tag)}`)

  const routes = [
    '/',
    '/services',
    '/careers',
    '/ru/careers',
    '/gdpr',
    '/nda',
    '/privacy',
    '/faq',
    '/case-studies/namba-food',
    '/case-studies/sir-john-monash-centre',
    '/case-studies/godee',
    'case-studies/yourcast/',
    'case-studies/veeqo/',
    '/blog',
    ...careerPageRoutes,
    ...blogPageRoutes,
    ...cuPageRoutes,
    ...authorPageRoutes,
    ...tagPageRoutes,
  ]

  return routes
}

export default getRoutes

/** The priority of the route depends on the nesting. More nesting has a lower priority
 Nesting is equal to minus 0.1 unit. Consistent with Seo * */
const getRoutePriority = path => 1 - (((path.split('/').length) - 1) * 0.1)

const generateRoute = name => {
  if (IGNORE_ROUTES.includes(name)) return null

  const priority = EXCLUDE_ROUTES[name] || getRoutePriority(name)

  return {
    priority,
    url: `${name}/`,
    changefreq: 'daily',
    lastmod: new Date().toISOString().split('T')[0],
  }
}

export const getSitemapRoutes = async () => {
  const sitemap = []
  const routes = await getRoutes()

  routes.forEach(route => {
    const sitemapRoute = generateRoute(route.trim())
    if (sitemapRoute) {
      sitemap.push(sitemapRoute)
    }
  })

  return sitemap
}
