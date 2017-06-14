
var React = require('react');
var PropTypes = require('prop-types');

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state={
      location: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    var value = event.target.value;

    this.setState(function(){
      return {
        location: value
      }
    })
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state.location)

  }
  render() {
    return (
      <div className='weather-nav'>
        <h1>Weather App</h1>
        <form className='column' onSubmit={this.handleSubmit}>
          <input
            className='form-control'
            id='home-city'
            placeholder = 'Las Vegas, Nevada'
            type='text'
            autoComplete='off'
            value={this.state.city}
            onChange={this.handleChange}
            />
          <button
            style={{margin: '10px'}}
            className='btn-success btn'
            type='submit'>
            Get Weather
          </button>
        </form>
      </div>
    )
  }
}
Nav.propTypes = {
  location: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

module.exports = Nav;
