
module.exports = {
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap',
    [
      '@nuxtjs/google-analytics',
      {
        id: (process.env.NODE_ENV === 'development')
        ? process.env.GA_ID
        : process.env.GA_ID,
      }
    ]
  ],
  sitemap: {
    path: 'dist/sitemap.xml',
    hostname: 'https://rm-js.com',
    cacheTime: 1000 * 60 * 15,
    generate: true,
  },
  css: ['assets/main.css'],
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - 水谷竜斗 | 名古屋発Webエンジニア',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '水谷竜斗(MIZUTANI Ryuto) IT不毛の地名古屋から世界に羽ばたく(予定)Webエンジニアです。' },
      { hid: 'og:site_name', property: 'og:site_name', content: '水谷竜斗 | 名古屋発Webエンジニア' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://rm-js.com' },
      { hid: 'og:title', property: 'og:title', content: '水谷竜斗 | 名古屋発Webエンジニア' },
      { hid: 'og:description', property: 'og:description', content: '水谷竜斗(MIZUTANI Ryuto) IT不毛の地名古屋から世界に羽ばたく(予定)Webエンジニアです。' },
      { hid: 'og:image', property: 'og:image', content: '/icon.svg'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  env: {
    FORMS_API: (process.env.NODE_ENV === 'development')
    ? process.env.FORMS_API
    : process.env.FORMS_API,
    GA_ID: (process.env.NODE_ENV === 'development')
    ? process.env.GA_ID
    : process.env.GA_ID,
  },
  mode: 'universal',
}

