module.exports = {
  target: 'server',
  env: {
    "CONTENT_HOST":"https://preview.objectic.io",
    "CONTENT_SPACE":"euvPvnHAM4aJ",
    "CONTENT_ENVIRONMENT":"master",
    "CONTENT_TOKEN":"kGyfW8kyTL2nb2l5wsKew2d3IEBDNbSBiMNpMpto1ff98625"
  },
  async redirects() {
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
