var React = require('react');
var Nav = require('Nav');


var Main = React.createClass({
	render: function(){
		return (
			<div>
				<Nav />
				<h1>Main Component</h1>
				{this.props.children /*this means import content of el here*/}
			</div>
		);
	}
});

module.exports = Main;