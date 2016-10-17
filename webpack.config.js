var path = require('path');

module.exports = {
	entry: './src/main.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
	      test: /\.js/,
				loader: 'babel-loader',
				query: {
		      presets: ['es2015']
		    }
			}
		]
	}
};