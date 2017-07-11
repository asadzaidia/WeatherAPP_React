var React = require('react');
var Nav=require('Nav');
var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Nav />
        <p>Main Component</p>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
