var React=require('react');
var About =React.createClass({
	render:function(){

	return(
		<div className="text-center page-title">
	<h1 className="text-center page-title">About Component</h1>
	<p> This is a Weather Application built on react!</p>
	<p>Here are some tools I used:</p>
	<ul>
		<li className="text-center">
			<a href="https://facebook.github.io/react">React
			</a>
	</li>
	<li className="text-center">
		<a href="http://openweathermap.org">openweathermap</a>

</li>

	</ul>
</div>
	);

	}

});

module.exports=About;
