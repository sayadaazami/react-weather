var React = require('react');

var WeatherMessage = React.createClass({
	getDefaultProps: function(){
		return {
			message: "default weather message!"
		}	
	},
	render: function(){
		return (
			<h3>{this.props.message}</h3>
		);
	}
});

module.exports = WeatherMessage;