var path = require('path');

module.exports = {

	devtool: 'source-map',

	entry: path.resolve(__dirname, 'src', 'index.js'),

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'build.js'
	},

	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
		]
	}

};