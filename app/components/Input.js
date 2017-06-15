
var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;

class Input extends React.Component {
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
    //console.log(this.state.location);
    // api.fetchFiveDayWeather(this.state.location)
    //   .then(function(weather){
    //     console.log(weather)
    //   }.bind(this))
  }
  render() {
    return (
        <form className={'column '+(this.props.horOrVer ? 'main-column':'')} onSubmit={this.handleSubmit} >
          <input
            className='form-control'
            id='home-city'
            placeholder = 'Las Vegas, Nevada'
            type='text'
            autoComplete='off'
            value={this.state.location}
            onChange={this.handleChange}
            />
          <Link
            style={{margin: '10px'}}
            className='btn-success btn'
            to={{
              pathname: '/forecast',
              search: '?location='+ this.state.location
            }}>
            Get Weather
          </Link>
        </form>
    )
  }
}
Input.propTypes = {
  horOrVer: PropTypes.bool.isRequired
}

module.exports = Input;
