var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
	render: function(){
		return (
			<nav>
				<h1 className="text-centered">Examples Component</h1>

				<p>this is some location examples</p>
				<ol>
					<li>
						<Link to="/?location=tehran">Tehran</Link>
					</li>
					<li>
						<Link to="/?location=london">London</Link>
					</li>
					<li>
						<Link to="/?location=sanandaj">Sanandaj</Link>
					</li>
				</ol>
			</nav>
		);
	}
});

module.exports = Examples;