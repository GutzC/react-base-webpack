var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'./app/index.js'
	],
	devServer: {
		port: 8080,
		inline: true,
		hot: true
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']}
            // NOTE: currently trying out Radium instead --->
			// {test: /\.scss$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap']}
		]
	},
	output: {
		path: __dirname + '/dist',
		filename: 'index_bundle.js'
	},
	plugins: [HTMLWebpackPluginConfig]
}
