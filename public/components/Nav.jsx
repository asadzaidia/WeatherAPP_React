var React = require('react');
var{Link,IndexLink}=require('react-router');



var Navigation=React.createClass({
  render:function(){
  return(
<div>
    <div className="top-bar">
      <div className="top-bar-right">

        <ul class="menu">
        <li className="menu-text">
        <a href="https://github.com/asadzaidia" target="_blank"> -Asad Zaidi</a>
        </li>

        </ul>
      </div>

      <div  className="top-bar-left">
          <ul className="menu">

              <li className="menu-text">
                React Time App
              </li>
              <li>
                <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
              </li>

              <li>

                <Link to="/" activeClassName="active-link">CountDown</Link>
              </li>

          </ul>

      </div>

    </div>
    </div>
  );
}



});

module.exports=Navigation;
