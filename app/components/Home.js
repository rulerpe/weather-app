
var React = require('react');
var Input = require('./Input');

class Home extends React.Component {
  render() {
    return (
      <div className='weather-container'  style={{backgroundImage: "url('app/images/pattern.svg')"}}>
        <h1 className='header'>Enter a City and State</h1>
        <Input horOrVer={true}/>
      </div>
    )
  }
}

module.exports = Home;
