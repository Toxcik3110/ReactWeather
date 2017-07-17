var path = require('path');
var webpack = require('webpack')

module.exports = {
	entry: [
		'script-loader!jquery',
		'script-loader!foundation-sites/dist/js/foundation.min.js',
		'./app/app.jsx'
	],
	externals: {
		jquery: 'jQuery',
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery',
		}),
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js',
	},
	resolve: {
		alias: {
			Main: path.resolve(__dirname, 'app/components/Main.jsx'),
			Nav: path.resolve(__dirname, 'app/components/Nav.jsx'),
			Weather: path.resolve(__dirname, 'app/components/Weather.jsx'),
			WeatherForm: path.resolve(__dirname, 'app/components/WeatherForm.jsx'),
			WeatherMessage: path.resolve(__dirname, 'app/components/WeatherMessage.jsx'),
			About: path.resolve(__dirname, 'app/components/About.jsx'),
			Examples: path.resolve(__dirname, 'app/components/Examples.jsx'),
			ErrorModal: path.resolve(__dirname, 'app/components/ErrorModal.jsx'),
			openWeatherMap: path.resolve(__dirname, 'app/api/openWeatherMap.jsx'),
			applicationStyles: path.resolve(__dirname, 'app/styles/app.css'),
		},
		extensions: [
			'.js',
			'.jsx'
		],
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: [
						'react',
						'es2015'
					],
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
			}
		],
	},
};