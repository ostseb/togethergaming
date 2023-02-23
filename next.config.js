module.exports = {
  target: 'server',
  env: {
    "CONTENTFUL_SPACE_ID": "qeqapgmln7mo",
    "CONTENTFUL_ACCESS_TOKEN": "gU0mqo9cQIB5furjRxJuN2CN7ExHdoDuFkICnVAgSL4"
  },

  async redirects() {
    console.log('okok')
    return [
      {
        source: '/:path*',
        destination: '/',
        permanent: true,
        source: '/:path*',
        destination: 'https://www.togethergamingsolutions.com',
        has: [
          {
            type: 'host',
            value: 'togethergaming.com',
          },
        ],
      },
    ]
  },
}