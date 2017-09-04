var React = require('react');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

var WeatherForm = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false,
			errorMessage:undefined
		};
	},
	render: function(){
		var {isLoading, errorMessage} = this.state;
		var myStyle = {display: (isLoading ? 'block' : 'none')}

		function errorMessageData(){
			if (typeof errorMessage === 'string') {
				return <ErrorModal message={errorMessage} title={'fetch data error'}/>;
			}
		}

		return (
			<div>
				<form onSubmit = {this.onSubmit}>
					<input type="text" ref="txt"/>

					<button className="button expanded hollow">Get Weather</button>
				</form>

				<div style={myStyle}>loading...</div>

				{errorMessageData()}
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
			function(e){
				that.setState({isLoading: false, errorMessage: e.message});
			}
		);
	}
});

module.exports = WeatherForm;