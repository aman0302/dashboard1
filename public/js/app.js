var React = require("react");
var ReactDOM = require("react-dom");

console.log("Test1");
console.log(React);
console.log("Test2");

var Hello = React.createClass({
  render: function(){
    return React.createElement("h3",null,"React 123");
  }
})

ReactDOM.render(React.createElement(Hello), document.getElementById('react'));
