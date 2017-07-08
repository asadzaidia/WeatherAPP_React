var webpack=require('webpack');
module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './public/app.jsx'
  ],
  externals: {
    jquery: 'jQuery',

  },
  plugins: [
     new webpack.ProvidePlugin({
       '$': 'jquery',
       'jQuery': 'jquery'
     })
   ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root:__dirname,
    alias: {
      Main: 'public/components/Main.jsx',
      Nav: 'public/components/Nav.jsx',
      Weather: 'public/components/weather.jsx',
      About: 'public/components/About.jsx',
      example: 'public/components/example.jsx',
      weatherForm: 'public/components/weatherForm.jsx',
       weatherMessage: 'public/components/weatherMessage.jsx',
       openWeatherMap: 'api/openWeatherMap.jsx'


    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool:'inline-source-map'


};
