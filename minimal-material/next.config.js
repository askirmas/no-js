const withCss = require('@zeit/next-css')
, withSass = require('@zeit/next-sass')
// , withImages = require('next-images')
// , withSourceMaping = require('@zeit/next-source-maps')

module.exports = //withImages(
  withCss(
    withSass(
      //withSourceMaps()(
        {
          assetPrefix: ".",
          sassLoaderOptions: {
            sassOptions: {
              includePath: [`${module.dirname}/node_modules`]
            },
            implementation: require('sass')
          }
        }
      //)
    )
  )
//)