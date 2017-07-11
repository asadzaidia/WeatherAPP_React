var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');


//load foundation

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();
//App css
require('style!css!sass!applicationStyles')

//debugger; this stop the program where it returns and use to find error and understand program
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    	
    </Route>
  </Router>,
  document.getElementById('app')
);
