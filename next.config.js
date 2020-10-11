const withImages = require('next-images')
const withFonts = require('next-fonts')
const withOffline = require('next-offline')

/**
 * Common pages runtimeCaching
 * @param {RegExp} urlPattern page url pattern
 */
const pageRuntimeCaching = (urlPattern) => ({
  urlPattern,
  // Apply a network-first strategy.
  handler: 'NetworkFirst',
  options: {
    cacheName: 'pages-cache',
    // Any network requests that fail to respond within 10s will fallback to the cache.
    networkTimeoutSeconds: 10,
    expiration: {
      maxEntries: 200,
      maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
    },
    cacheableResponse: {
      statuses: [0, 200],
    },
  },
})

module.exports = withOffline(
  withImages(
    withFonts({
      // Workbox config for offline PWA
      workboxOpts: {
        cleanupOutdatedCaches: true,
        swDest: process.env.NEXT_EXPORT
          ? 'service-worker.js'
          : 'static/service-worker.js',

        runtimeCaching: [
          {
            urlPattern: '/',
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'html-cache',
              cacheableResponse: {
                statuses: [200],
              },
            },
          },
          {
            urlPattern: /api/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              cacheableResponse: {
                statuses: [0, 200, 201],
              },
            },
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|woff|ttf|eot|ico)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'static-resources-cache',
              expiration: {
                maxEntries: 300,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month.
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      async rewrites() {
        return [
          {
            source: '/service-worker.js',
            destination: '/_next/static/service-worker.js',
          },
        ]
      },
    })
  )
)
