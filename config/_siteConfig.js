/**
 * CMS Configuration
 * Alter 'netlify' in the import statment below to one of the following:
 * netlify
 */
import theCMS from '../cms/netlify/cms'

/**
 * General Site configurations
 */
export default {
  siteName: 'Prasanth Sasikumar',
  tagline: 'XR Researcher',
  featureImage: '/uploads/home-rx8.jpg',
  logo: 'logo-component', // 'logo-component', // or '/logo.svg' for regular image
  googleAnalytics: {
    on: true,
    id: process.env.GOOGLE_ANALYTICS_ID
  },
  mainMenu: [
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Contact',
      link: '/contact'
    },
    {
      name: 'Categories',
      link: '/categories'
    },
    {
      name: 'Github Repo',
      link: 'https://github.com/prasanthsasikumar',
      target: '_blank'
    },
    {
      name: 'Resume/CV',
      link: 'https://prasanthsasikumar.com',
      target: '_blank'
    }
  ],
  hero: {
    theme: 'dark' // options: mist, light, dark
  },

  // Main Layout/Style
  layout: {
    width: 'contained', // Options: contained, full
    theme: 'one-column' // Options: one-column, sidebar-right, sidebar-left
  },

  // Card Layout
  cards: {
    imageDimensions: '2x1', // Options: 1x1, 5x4, 4x3, 3x2, 5x3, 16x9, 2x1, 3x1, 4x5, 3x4, 2x3, 3x5, 9x16
    theme: 'boxes' // Options: boxes, grid, image-grid
  },

  // Disqus
  disqus: {
    on: true,
    loadingStrategy: 'button', // Options: onload, lazy, button
    siteShortName: 'https-prasanthsasikumar-com' // 'blog-danielkelly-io'
  },

  // Newsletter Subscribe
  newsletter: {
    on: true,
    heading: 'Subscribe to my Newsletter',
    btnText: 'Subscribe',
    // Can be the form action on a mail chimp form, a hubspot form,
    // or any other url you want to post the form data to
    mailchimp: {
      on: true,
      formAction:
        'https://prasanthsasikumar.us4.list-manage.com/subscribe/post?u=2e57f331790dff4d1ec177b1b&amp;id=43a5087d54'
    },
    custom: {
      on: false,
      formAction: ''
    }
  },

  // Categories
  categories: {
    on: true,
    perPage: 6,
    imageDimensions: null, // See card.imageDimensions (can be unique for categories if set here)
    theme: null // See card.theme (can be unique for categories if set here)
  },

  // Posts
  posts: {
    on: true,
    theme: null, // See card.theme (can be unique for posts if set here)
    imageDimensions: null, // See card.imageDimensions (can be unique for posts if set here)
    displayAuthor: true,
    date: {
      display: true
    },
    perRow: 3,
    perPage: 6
  }
}

export const CMS = theCMS
