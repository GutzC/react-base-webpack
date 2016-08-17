var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

// var USER_DATA = {
// 	name: 'Brandon Kent',
// 	username: 'brandonk3nt',
// 	image: 'https://avatars2.githubusercontent.com/u/10407384?v=3&s=460'
// };

// var ProfileImg = React.createClass({
// 	render: function() {
// 		return (
// 			<img src={this.props.imgUrl} style={{height: 100, width: 100}}/>
// 		);
// 	}
// });

// var ProfileName = React.createClass({
// 	render: function() {
// 		return (
// 			<div> {this.props.name} </div>
// 		);
// 	}
// });

// var Link = React.createClass({
// 	changeUrl: function() {
// 		window.location.replace(this.props.href)
// 	},
// 	render: function() {
// 		return (
// 			<span
// 			style={{color: 'blue', cursor: 'pointer'}}
// 			onClick={this.changeUrl}>
// 				{this.props.children}
// 			</span>
// 		)
// 	}
// });

// var ProfileLink = React.createClass({
// 	render: function() {
// 		return (
// 			<div>
// 				<Link href={"https://www.github.com/" + this.props.username}>
// 					{this.props.username}
// 				</Link>
// 			</div>
// 		);
// 	}
// });

// var Avatar = React.createClass({
// 	render: function() {
// 		return (
// 			<div>
// 				<ProfileImg imgUrl={this.props.user.image}/>
// 				<ProfileName name={this.props.user.name}/>
// 				<ProfileLink username={this.props.user.username}/>
// 			</div>
// 		);
// 	}
// });

// var ListContainer = React.createClass({
//   render: function(){
// 	var technologies = ['react', 'redux', 'react-router', 'sass', 'node', 'express', 'rethinkdb'];
//
//     return (
// 		<div>
// 			<List technologies={technologies} />
// 		</div>
//     )
//   }
// });
//
// var List = React.createClass({
// 	render: function() {
// 		var techList = this.props.technologies.map(function(tech) {
// 			return (
// 				<li> {tech} </li>
// 			)
// 		});
// 		return (
// 			<ul>
// 				{techList}
// 			</ul>
// 		)
// 	}
// });

ReactDOM.render(routes, document.getElementById('app'));
