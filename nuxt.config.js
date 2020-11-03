const { VuetifyProgressiveModule } = require('vuetify-loader')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
export default {
  ssr: true,
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
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/anime_vue.js',
    '~/plugins/vuetify.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  vuetify: {
    treeShake: {
      loaderOptions: {
        progressiveImages: true
      }
    },
    optionsPath: './vuetify.options.js'
  },

  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/vuetify',
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
i18n: {}
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
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    // theme: {
    //   dark: true,
    //   themes: {
    //     dark: {
    //       primary: colors.blue.darken2,
    //       accent: colors.grey.darken3,
    //       secondary: colors.amber.darken3,
    //       info: colors.teal.lighten1,
    //       warning: colors.amber.base,
    //       error: colors.deepOrange.accent4,
    //       success: colors.green.accent3
    //     }
    //   }
    // }
  },

  build: {
    /*
     ** You can extend webpack config here
     */
    analyze: true,
    // or
    analyze: {
      analyzerMode: 'static'
    },
    transpile: ['vuetify/lib'],
    // plugins: [new VuetifyLoaderPlugin()],
    extend(config, ctx) {
      loaders: {
        file: {
          esModule: false
        }
      }
    }
  }
}
