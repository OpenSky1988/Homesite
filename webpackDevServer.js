const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev');

const compiler = webpack(config);
const webpackDevServerSettings = {
	hot: true,
	// display no info to console (only warnings and errors)
	noInfo: false,
	// Open compiled code in Chrome browser. 'Google Chrome' on macOS, 'google-chrome' on Linux and 'chrome' on Windows.
	open: 'chrome',
	publicPath: config.output.publicPath,
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
		version: false
	}
};

const webpackDevServer = new WebpackDevServer(compiler, webpackDevServerSettings);

let listener = webpackDevServer.listen(0, 'localhost', (error) => {
	if (error) {
		console.log(`\nServer - Bundle building error: ${JSON.stringify(error, null, '  ')}\n`);
		return;
	}

	console.log(`\nListening at http://localhost:${listener.address().port}. Please wait... \nBundle building is in proccess.\n`);
});
