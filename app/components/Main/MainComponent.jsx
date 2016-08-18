var React = require('react');

var MainComponent = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	handleRoute: function() {
		this.context.router.push('/inner');
	},
	render: function() {
		return (
			<div>
				<h1 style={{color:'red'}}>This is the MainComponent bro.</h1>
				<h4
					style={{color: 'blue', cursor:'pointer'}}
					onClick={this.handleRoute}>
						go to Innercomponent -->
				</h4>
			</div>
		)
	}
});

module.exports = MainComponent;
