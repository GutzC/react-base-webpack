var React = require('react');

require('../../styles/main/main.scss');

class MainComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			liked: false
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState({liked: !this.state.liked});
	}
	render() {
		const text = this.state.liked ? 'liked' : 'haven\'t liked';
		return (
			<div className='main-component' onClick={this.handleClick}>
				You {text} this. Click to toggle.
			</div>
		);
	}
}

// var MainComponent = React.createClass({
// 	contextTypes: {
// 		router: React.PropTypes.object.isRequired
// 	},
// 	handleRoute: function() {
// 		this.context.router.push('/inner');
// 	},
// 	render: function() {
// 		return (
// 			<div>
// 				<h1 className='main-component'>This is the MainComponent bro.</h1>
// 				<h4
// 					style={{color: 'blue', cursor:'pointer'}}
// 					onClick={this.handleRoute}>
// 						go to Innercomponent -->
// 				</h4>
// 			</div>
// 		)
// 	}
// });

module.exports = MainComponent;
