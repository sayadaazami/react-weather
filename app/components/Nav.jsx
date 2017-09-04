var React = require('react');
var {Link} = require('react-router');
// the line above equals to ===> (var Link = require('react-router').Link) uses es6 destructor
// var user = {name:"sayad", lastname:"aazami"}     =>   var {name} = user    => now name equals to "sayad"

var Nav = React.createClass({
	onWeatherSearch: function(e){
		e.preventDefault();
		alert('booom');
	},

	render: function(){
		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">Weather App</li>
						<li>
							<Link to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Get Weather </Link>
						</li>
						<li>
							<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> About  </Link>
						</li>
						<li>
							<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Examples  </Link>
						</li>
					</ul>
				</div>

				<div className="top-bar-right">
					<form onSubmit={this.onWeatherSearch}>
						<ul className="menu">
							<li>
								<input type="search"  placeholder="place name" />
							</li>
							<li>
								<input type="submit"  className="button" value="Get" />
							</li>
						</ul>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = Nav;