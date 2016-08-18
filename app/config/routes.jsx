var React = require('react'),
	ReactRouter = require('react-router'),
	Router = ReactRouter.Router,
	Route = ReactRouter.Route,
	browserHistory = ReactRouter.browserHistory,
	IndexRoute = ReactRouter.IndexRoute,
	MainContainer = require('../components/Main/MainContainer.jsx'),
	MainComponent = require('../components/Main/MainComponent.jsx'),
	InnerComponent = require('../components/Inner/InnerComponent.jsx');

var routes = (
	<Router history={browserHistory}>
		<Route path='/' component={MainContainer}>
			<IndexRoute component={MainComponent} />
			<Route path='/inner' component={InnerComponent} />
		</Route>
	</Router>
);

module.exports = routes;
