const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
		app: [
			path.join(__dirname, 'src', 'index.tsx')
		]
	},
	output: {
    path: path.join(__dirname, 'build'),
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.less', '.css']
  },

	// Loaders work at the individual file level during or before the bundle is generated.
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre'
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
						loader: 'css-loader'
					}
				]
			}, {
				test: /\.less$/,
				loaders: ['style-loader', 'css-loader', 'less-loader']
			},

			// 'file-loader' resolves import / require() on a file into a url and emits the file into the output directory.
			// Images
			{
				test: /\.(png|svg|jpg|jpeg|gif|tiff)$/,
				loader: 'file-loader',
				options: {
					// To refer to 'img' directory with '/img' instead of 'src/img' in JS/TS-related files.
					publicPath: 'src'
				}
			},

			// Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
				loader: 'file-loader'
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
