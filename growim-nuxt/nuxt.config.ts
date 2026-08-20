// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Growim || Creative Digital Marketing Agency',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        {
          name: 'description',
          content: 'Growim is a modern creative digital marketing, SEO, and web agency Nuxt application.'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/images/favicons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/images/favicons/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/images/favicons/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap'
        },
        { rel: 'stylesheet', href: '/assets/vendors/bootstrap/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/assets/vendors/animate/animate.min.css' },
        { rel: 'stylesheet', href: '/assets/vendors/fontawesome/css/all.min.css' },
        { rel: 'stylesheet', href: '/assets/vendors/growim-icons/style.css' },
        { rel: 'stylesheet', href: '/assets/css/growim.css' }
      ]
    }
  },

  css: [
    'swiper/css',
    'swiper/css/navigation',
    'swiper/css/pagination',
    'swiper/css/autoplay',
    'swiper/css/effect-fade'
  ]
})
