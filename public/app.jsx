var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather=require('Weather');
var About=require('About');
var example=require('example');

//load foundation

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//debugger; this stop the program where it returns and use to find error and understand program
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    	<Route path="about" component={About}/>
    	<Route path="example" component={example}/>
    	<IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
