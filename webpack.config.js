module.exports = {
    entry: './client/app.js',
    output: {
        path: './client',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './client',
        port: 8080
      },
    module: {
      loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
              presets: ['es2015', 'react']
          }
      }]
  }
}
