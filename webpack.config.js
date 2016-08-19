var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'webpack/hot/only-dev-server', // prevents hot-reloading on syntax errors
		'./app/index.js'
	],
	module: {
		loaders: [
			{test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader']},
			{test: /\.scss$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap']}
		]
	},
	output: {
		path: __dirname + '/dist',
		filename: 'index_bundle.js'
	},
	plugins: [HTMLWebpackPluginConfig]
}
