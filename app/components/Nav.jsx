var React = require('react');
var {Link} = require('react-router');
// the line above equals to ===> (var Link = require('react-router').Link) uses es6 destructor
// var user = {name:"sayad", lastname:"aazami"}     =>   var {name} = user    => now name equals to "sayad"

var Nav = React.createClass({
	render: function(){
		return (
			<nav>
				<Link to="/"> Get Weather </Link>
				<Link to="/about"> About  </Link>
			</nav>
		);
	}
});

module.exports = Nav;