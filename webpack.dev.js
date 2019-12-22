const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
		app: [
			path.join(__dirname, 'src', 'index.tsx')
		]
	},
	output: {
    path: path.join(__dirname, 'dist'),
		filename: '[name].js'
  },
  
  // Enable sourcemaps for debugging Webpack's output.
  devtool: 'source-map',
  
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.less', '.css']
  },
	

	// Loaders work at the individual file level during or before the bundle is generated.
  module: {
    rules: [
      // 'source-map-loader' extracts existing source maps from all JavaScript entries.
      {
        test: /\.js$/,
        enforce: 'pre',
        loaders: ['source-map-loader']
			}, 

			// TypeScript linter
			{
        test: /\.ts(x?)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loaders: [
          {
            loader: 'tslint-loader',
            options: {
              emitErrors: true
            }
          }
        ]
			}, 

			// 'babel-loader' allows transpiling JavaScript files using Babel and Webpack.
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loaders: ['babel-loader']
			},

			// TypeScript loader
			{
				test: /\.(ts|tsx)?$/,
				loaders: [
					'babel-loader',
					'awesome-typescript-loader'
				]
			}, 

			// CSS and LESS loaders
			{
				test: /\.css$/,
				loaders: [
					{
						loader: 'style-loader'
					}, {
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					}
				]
			}, {
				test: /\.less$/,
				loaders: [
					{
						loader: 'style-loader'
					}, {
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					}, {
						loader: 'less-loader',
						options: {
							sourceMap: true
						}
					}
				]
			},

			// 'file-loader' resolves import / require() on a file into a url and emits the file into the output directory.
			// Images
			{
				test: /\.(png|svg|jpg|jpeg|gif|tiff)$/,
				loader: 'file-loader?name=img/[name].[ext]',
				options: {
					// To refer to 'img' directory with '/img' instead of 'src/img' in JS/TS-related files.
					publicPath: 'src'
				}
			},

			// Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
				loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
	},


	// Plugins work at bundle or chunk level and usually work at the end of the bundle generation process.
	// Plugins can also modify how the bundles themselves are created.
	// Plugins have more powerful control than loaders.
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
			filename: './index.html'
		}),
		// To refer to 'img' directory with '/img' instead of '../../img' in CSS files.
		new CopyWebpackPlugin([{
			from: './src/img',
			to: 'img'
		}]),
		new webpack.DefinePlugin({
			DEBUG: true
    })
	]
};
