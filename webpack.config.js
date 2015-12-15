var path = require('path');
var webpack = require('webpack');

var webpackDevHost = 'localhost';

module.exports = function(webpackDevPort) {
	return {
		entry: [
			'webpack-dev-server/client?http://' + webpackDevHost + ':' + webpackDevPort,
			'webpack/hot/only-dev-server',
			'./components/index'
		],
		cache: true,
		debug: true,
		devtool: 'eval-cheap-module-source-map',
		output: {
			path: path.join(__dirname, 'dist'),
			filename: 'bundle.js',
			publicPath: 'http://' + webpackDevHost + ':' + webpackDevPort + '/static/'
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin()
		],
		module: {
			loaders: [
				{test: /\.jsx?$/, loaders: ['jsx-loader?insertPragma'] },
	            { test: /\.es$/, loaders: ['babel?optional=runtime'] },
	            { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
			]	
		},
		resolve: {
			extensions: ['', '.js', '.jsx', '.es', '.css']
		},

	}
}