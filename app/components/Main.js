var React = require('react');

var Main = React.createClass({
	render: function() {
		return (
			<div>
				Main Component (here)
				{this.props.children}
			</div>
		)
	}
});

module.exports = Main;