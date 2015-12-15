var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var getConfig = require('../webpack.config');

const webpackDevHost = 'localhost';

function listen (serverPort) {
	const webpackDevPort = serverPort + 1;
	const config = getConfig(webpackDevPort);

	const webpackDevServer = new WebpackDevServer(webpack(config), {
			publicPath: config.output.publicPath,
			hot: true,
			historyApiFallback: true,
			stats: {
		        colors: true
		    },
		});
	webpackDevServer.listen(webpackDevPort, webpackDevHost, (err, res) => {
		if (err) {
			console.log(err);
		}

		console.log(`Listening at ${webpackDevHost}:${webpackDevPort}`);
	})
}

module.exports = { listen };