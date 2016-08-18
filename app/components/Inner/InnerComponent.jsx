var React = require('react');

require('../../styles/main/inner.scss');

var InnerComponent = React.createClass({
	render: function() {
		return (
			<div>
				<h2 className='inner-component'>This is the inner component, dogg.</h2>
			</div>
		)
	}
});

module.exports = InnerComponent;
