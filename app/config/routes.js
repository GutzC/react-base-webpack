import React from 'react';
import ReactRouter, { Router, Route, browserHistory, IndexRoute } from 'react-router';
import RootComponent from '../components/RootComponent';

const routes = (
	<Router history={browserHistory}>
		<Route path='/' component={RootComponent} />
	</Router>
);

module.exports = routes;
