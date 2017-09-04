var React = require('react');
var Nav = require('Nav');


var Main = React.createClass({
	render: function(){
		return (
			<div>
				<Nav />

				<div className="row app-container" style={{marginTop: '15px'}}>
					<div className="columns medium-6 larg-4 small-centered">
						{this.props.children /*this means import content of el here*/}
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Main;