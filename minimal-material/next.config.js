const withCss = require('@zeit/next-css')
, withSass = require('@zeit/next-sass')
// , withImages = require('next-images')
// , withSourceMaping = require('@zeit/next-source-maps')

// , sassImplementation = require('sass')

, config = //withImages(
    withSass(
      withCss(
      //withSourceMaps()(
        {
          assetPrefix: ".",
          sassLoaderOptions: {
            sassOptions: {
              includePaths: [
                `${__dirname}/node_modules`
              ],  
            },
          // implementation: sassImplementation
          }
        }        
      //)
    )
  )
//)


module.exports = {
  ...config
}