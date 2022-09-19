export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  publicRuntimeConfig: {
    appName: process.env.APP_NAME || 'Furnace Temperature',
    weather: {
      lat: process.env.WEATHER_LAT || 40.712776,
      lng: process.env.WEATHER_LNG || -74.005974
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.APP_NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/helpers.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/lodash.js', '~/plugins/auto-fetcher.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/pwa',
    'nuxt-sweetalert2'
  ],

  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: false,
      home: '/'
    },
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'access_token',
          global: true,
          required: true,
          type: 'Bearer',
          maxAge: 60 * 60 * 24 * 30
        },
        refreshToken: {
          property: 'access_token',
          data: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30
        },
        user: {
          property: false,
          autoFetch: true
        },
        endpoints: {
          login: { url: '/api/login', method: 'post' },
          refresh: { url: '/api/refresh', method: 'post' },
          user: { url: '/api/me', method: 'get' },
          logout: { url: '/api/logout', method: 'post' }
        }
      }
    },
    plugins: ['~/plugins/auth.js']
  },

  router: {
    middleware: ['auth']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    browserBaseURL: process.env.API_BASE_URL,
    credentials: true
  },

  bootstrapVue: {
    icons: true
  },

  sweetalert: {
    confirmButtonColor: '#007bff'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      nativeUI: true
    },
    manifest: {
      name: process.env.APP_NAME,
      lang: 'pl'
    },
    icon: {
      purpose: 'any'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  vue: {
    config: {
      productionTip: false,
      devtools: false
    }
  }
}
