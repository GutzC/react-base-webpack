var React = require('react');

var InnerComponent = React.createClass({
	render: function() {
		return (
			<div>
				<h2 style={{color:'rebeccapurple'}}>This is the inner component, dogg.</h2>
			</div>
		)
	}
});

module.exports = InnerComponent;
