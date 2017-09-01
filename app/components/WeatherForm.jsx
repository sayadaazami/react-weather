var React = require('react');
var OpenWeatherMap = require('OpenWeatherMap');

var WeatherForm = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false
		};
	},
	render: function(){
		var {isLoading} = this.state;
		var myStyle = {display: (isLoading ? 'block' : 'none')}

		return (
			<div>
				<form onSubmit = {this.onSubmit}>
					<input type="text" ref="txt"/>
					<button>Get Weather</button>
				</form>

				<div style={myStyle}>loading...</div>
			</div>
		);
	},
	onSubmit: function(e){
		e.preventDefault();

		var location = this.refs.txt.value;

		if (location.length) {
			var result = this.getWeather(location);
		}
	},
	getWeather: function(location){
		var that = this;

		this.setState({isLoading: true});

		OpenWeatherMap.getTemp(location).then(
			function(temp){
				that.props.onGetWeatherResult(temp);
				that.setState({isLoading: false});
			},
			function(err){
				alert(err);
				that.setState({isLoading: false});
			}
		);
	}
});

module.exports = WeatherForm;