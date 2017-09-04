var React = require('react');

var ErrorModal = React.createClass({
	componentDidMount: function() {
		var errModel = new Foundation.Reveal($('#error-modal'));
		errModel.open()
	},
	render: function(){
		return (
			<div id="error-modal" className="reveal tiny text-centered" data-reveal="">
				<h4>{this.props.title || 'Error'}</h4>
				<p>{this.props.message || 'Error!'}</p>
				<hr />
				<button className="button hollow" data-close="">
					Ok
				</button>
			</div>
		);
	}
});

module.exports = ErrorModal;