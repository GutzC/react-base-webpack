var React = require('react');

var MainContainer = React.createClass({
	render: function() {
		return (
			<div>
				This is the MainContainer, homie.
				{this.props.children}
			</div>
		)
	}
});

module.exports = MainContainer;
