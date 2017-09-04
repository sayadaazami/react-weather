var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//include foundation  =>  we dont use it in webpack config because we will use it in specific Components not all of them...!
// this will load the css use css loader  => css!foundations-sites/dist/foundation.min.css
// and this will use css into styles use style loader   =>  style!css!foundations-sites/dist/foundation.min.css
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={Main}>
  		<Route path="examples" component={Examples}></Route>
  		<Route path="about" component={About}></Route>
  		<IndexRoute component={Weather} />
  	</Route>
  </Router>,
  document.getElementById('app')
);