var React = require('react');
var Home = require('./Home')

var Main = React.createClass({
	render: function() {
		return (
			<div>
				Main Component (here)
				<Home />
			</div>
		)
	}
});

module.exports = Main;
