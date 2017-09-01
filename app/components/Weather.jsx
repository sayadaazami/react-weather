var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
	getInitialState: function() {
		return {
			weather: 'nothing yet'
		};
	},
	render: function(){
		return (
			<div>
				<WeatherForm onGetWeatherResult={this.getWeatherHandler}/>

				<WeatherMessage message={this.state.weather}/>
			</div>
		);
	},
	getWeatherHandler: function(weatherData){
		this.setState({
			weather: weatherData
		});
	}
});

module.exports = Weather;