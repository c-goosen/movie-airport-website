const { VuetifyProgressiveModule } = require('vuetify-loader')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
export default {
  ssr: false,
  target: 'static',
  // mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/anime_vue.js',
  ],
  /*
   ** Nuxt.js dev-modules
   */


  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-i18n',
    'nuxt-buefy',
    'nuxt-svg-loader',
  // https://go.nuxtjs.dev/axios
  // https://go.nuxtjs.dev/pwa
  // https://go.nuxtjs.dev/content
  '@nuxt/content',
  '@nuxtjs/proxy',
  '@nuxtjs/axios',
  '@nuxtjs/pwa'
],
i18n: {},
  purgeCSS: {
    whitelist: ['hidden'],
    whitelistPatterns: [/md:w-[1-6]/]
  },
  axios: {
    proxy: true
  },

  proxy: {
    '/api': {
      target: 'https://public-api.adsbexchange.com',
      pathRewrite: {
        '^/api' : '/'
        }
    }},
  /*
   ** Build configuration
   */


  build: {
    /*
     ** You can extend webpack config here
     */
    html: {
      minify:{
              collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    },
    loaders: {
      vueStyle: { manualInject: true }
    },
    treeShake: true,
    analyze: true,
    // or
    analyze: {
      analyzerMode: 'static'
    },
    extend(config, { isDev, isClient }) {
      // ..
      config.module.rules.push({
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader'
      })
      // Sets webpack's mode to development if `isDev` is true.
      if (isDev) {
        config.mode = 'development'
      }
    }
  }
}
