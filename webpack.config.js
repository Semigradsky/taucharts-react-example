var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

	devtool: 'source-map',

	entry: path.resolve(__dirname, 'src', 'index.js'),

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'build.js'
	},

	resolve: {
		alias: {
			taucharts$: 'taucharts/build/development/tauCharts.js',
			taucharts: 'taucharts/build/development'
		}
	},

	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
			{ test: /\.css$/, loader: 'style!css' }
		]
	},

	plugins: [new HtmlWebpackPlugin({
		template: path.resolve(__dirname, 'src', 'index.html')
	})]

};
