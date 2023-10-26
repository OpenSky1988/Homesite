const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const path = require('path');
const webpack = require('webpack');

require('dotenv').config({ path: '.env' });

const servers = {
  local: `http://${require('ip').address()}:8090`,
  // public: 'http://public.path.here',
};

const serverContext = '/api';

const { NODE_ENV, API_ENV, PORT } = process.env;
const config = {};

config.mode = NODE_ENV;

config.entry = {
	app: [
		path.join(__dirname, 'src', 'index.tsx'),
	],
};

config.resolve = {
	extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.less', '.css'],
	alias: {
		'react-dom': 'react-dom/profiling',
		'scheduler/tracing': 'scheduler/tracing-profiling',
		'~': path.join(__dirname, '/src'),
	},
};

config.optimization = {
	chunkIds: 'named', // !!!
	removeAvailableModules: true,
	splitChunks: {
		minSize: 17000,
		minRemainingSize: 0,
		minChunks: 1,
		maxAsyncRequests: 30,
		maxInitialRequests: 30,
		automaticNameDelimiter: "_",
		enforceSizeThreshold: 30000,
		cacheGroups: {
			common: {
				test: /[\\/]node_modules[\\/]/,
				priority: -5,
				reuseExistingChunk: true,
				chunks: "initial",
				name: "common_app",
				minSize: 0,
			},
			default: {
				minChunks: 2,
				priority: -20,
				reuseExistingChunk: true,
			},
			// we are opting out of defaultVendors, so rest of the node modules will be part of default cacheGroup
			defaultVendors: false,
			reactPackage: {
				test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom)[\\/]/,
				name: 'vendor_react',
				chunks: "all",
				priority: 10,
			},
		},
	},
	usedExports: true,
};

config.module = {
	rules: [
		// 'source-map-loader' extracts existing source maps from all JavaScript entries.
		{
			test: /\.js$/,
			enforce: 'pre',
			use: ['source-map-loader'],
		}, 

		// TypeScript linter
		{
			test: /\.ts(x?)$/,
			enforce: 'pre',
			exclude: /node_modules/,
			use: [
				{
					loader: 'tslint-loader',
					options: {
						emitErrors: true,
					},
				},
			],
		}, 

		// 'babel-loader' allows transpiling JavaScript files using Babel and Webpack.
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: ['babel-loader'],
		},

		// TypeScript loader
		{
			test: /\.(ts|tsx)?$/,
			exclude: /node_modules/,
			use: [
				'babel-loader',
				'ts-loader',
			],
		}, 

		// CSS and LESS loaders
		{
			test: /\.css$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						sourceMap: true,
					},
				},
			],
		},
		
		{
			test: /\.less$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						sourceMap: true,
					}
				},
				{
					loader: 'less-loader',
					options: {
						sourceMap: true,
					}
				},
			],
		},

		// 'file-loader' resolves import / require() on a file into a url and emits the file into the output directory.
		// Images
		{
			test: /\.(png|svg|jpg|jpeg|gif|tiff)$/,
			loader: 'file-loader',
			options: {
				// To refer to 'img' directory with '/img' instead of 'src/img' in JS/TS-related files.
				publicPath: 'src',
				name: '[name].[ext]',
				outputPath: 'img',
			}
		},

		// Fonts
		{
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			loader: 'file-loader',
			options: {
				name: '[name].[ext]',
				outputPath: 'imfontsg',
			}
		},
	],
};

config.plugins = [
	new HtmlWebpackPlugin({
		modern: true,
		template: path.join(__dirname, 'public', 'index.html'),
		filename: './index.html',
	}),

	// To refer to 'img' directory with '/img' instead of '../../img' in CSS files.
	new CopyWebpackPlugin([{
		from: './src/img',
		to: 'img',
	}]),

	new webpack.EnvironmentPlugin({
		'API_PATH': serverContext,
	}),

	new BundleAnalyzerPlugin(),
];

config.output = {
	path: path.join(__dirname, 'dist'),
	filename: '[name].js',
	publicPath: '/',
};

if (NODE_ENV === 'development') {
	config.plugins.push(
		new webpack.DefinePlugin({
			DEBUG: true,
		}),
	);
  
	config.watchOptions = {
	  	ignored: /node_modules/,
	};
  
	config.devtool = 'cheap-source-map';
  
	config.devServer = {
		contentBase: path.join(__dirname, 'build'),
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': '*',
		},
		proxy: {
			[serverContext]: {
				target: servers[API_ENV] ? servers[API_ENV] : API_ENV,
				secure: true,
				changeOrigin: true,
			}
		},
		port: PORT,
		hot: true,
		// Open compiled code in Chrome browser. 'Google Chrome' on macOS, 'google-chrome' on Linux and 'chrome' on Windows.
		open: 'chrome',
		historyApiFallback: true,
		quiet: false,
		// display no info to console (only warnings and errors)
		noInfo: false,
		disableHostCheck: true,
		compress: true,
		stats: {
			// Assets information
			assets: false,
			// Information about cached (not built) modules
			cached: false,
			// Messages from child loaders
			children: false,
			// Adds built modules information to chunk information
			chunkModules: false,
			// The origins of chunks and chunk merging info
			chunkOrigins: false,
			// Chunk information
			chunks: false,
			// With console colors
			colors: true,
			// Error details (like resolving log)
			errorDetails: true,
			// Compilation hash
			hash: true,
			// Built modules information
			modules: false,
			// Information about the reasons why modules are included
			reasons: false,
			// Source code of modules
			source: false,
			// Timing information
			timings: true,
			// Webpack version information
			version: false,
		},
		https: true,
	};
}
  
if (NODE_ENV === 'production') {
	config.output = {
	 	path: path.join(__dirname, '/build/'),
	 	filename: '[name].[contenthash].js',
	 	publicPath: 'img',
	};
  
	config.devtool = 'source-map';
  
	config.optimization.minimizer = [
		new TerserPlugin({
			parallel: true,
			terserOptions: {
				sourceMap: true,
			},
		}),
	];
  
	config.stats = {
		assets: false,
		version: false,
		hash: false,
		timings: true,
		chunks: true,
		chunkModules: false,
		children: false,
		modules: false,
	};
}

module.exports = config;
