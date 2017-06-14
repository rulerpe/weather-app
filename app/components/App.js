
var React = require('react');
var Nav = require('./Nav');
var Home = require('./Home');

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      location: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(input_location){
    this.setState(function(){
      return {
        location: input_location
      }
    })
  }
  render() {
    var location = this.state.location
    return (
      <div className="main-container">
        <Nav
          location={location}
          onSubmit={this.handleSubmit}
          />
        <Home
          location={location}
          onSubmit={this.handleSubmit}
          />
      </div>
    )
  }
}

module.exports = App;
