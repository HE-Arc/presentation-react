const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  // Where is the entry script
  entry: ['./js/index.js'],
  // Where is the node_modules containing the dependencies (not needed normally)
  resolve: {
    modules: ['../node_modules'],
  },
  // Where the resulting compiled JavaScript has to go
  output: {
    path: path.resolve(__dirname, 'dist'), // Create a 'dist' folder that contains resulting js and HTML
    filename: 'js/index.js',
  },
  // Webpack Development Server with automaigc in-browser page reload on change
  devServer: {
    contentBase: './dist', // Server's root
  },
  module: {
    // Define how to process every type of file
    rules: [
      // JavaScript files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // Processors/Plugins to for JavaScript (babel in our case)
        use: {
          loader: 'babel-loader',
        },
      },
      // We use an HTML template for oure single page app
      {
        test: /\.html$/,
        use: [
          {
            // The loader uses HTML the template and injects JavaScript dependencies in it.
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    // Where is our template and where (in 'dist') do we place it.
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: './index.html',
    }),
  ],
};
