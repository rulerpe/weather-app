
var React = require('react');
var Input = require('./Input');

class Nav extends React.Component {
  render() {
    return (
      <div className='weather-nav'>
        <h1>Weather App</h1>
        <Input horOrVer={false}/>
      </div>
    )
  }
}

module.exports = Nav;
