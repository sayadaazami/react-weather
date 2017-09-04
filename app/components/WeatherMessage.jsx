var React = require('react');

var WeatherMessage = React.createClass({
	getDefaultProps: function(){
		return {
			message: "default weather message!"
		}	
	},
	render: function(){
		return (
			<h3 style={{textAlign: 'center'}}>
				{this.props.message}
			</h3>
		);
	}
});

module.exports = WeatherMessage;