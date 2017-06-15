
var React = require('react');
var queryString = require('query-string');
var api = require('../utils/api');
var Loading = require('./Loading');
var Days = require('./Days');

class Forecast extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        loading: true,
        location: null,
        weather: null
      };
      this.updateLocation = this.updateLocation.bind(this);
  }
  updateLocation(){
    var query = queryString.parse(this.props.location.search);
    console.log(query)
    api.fetchFiveDayWeather(query.location)
      .then(function(response){
        this.setState(function(){
          return {
            loading: false,
            location: query.location,
            weather: response.data.list
          }
        })
        console.log(this.state.weather)
      }.bind(this))
  }
  componentDidMount(){
    this.updateLocation();
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.location.search !== this.props.location.search){
      this.updateLocation();
    }
  }
  render() {
    var loading = this.state.loading;
    var location = this.state.location;
    var weather = this.state.weather;
    if(loading === true){
      return <Loading />
    }
    return (
      <div className='weather-forecast'>
        <h1 className='forecast-header'>{location}</h1>
        <Days weathers={weather} />
      </div>
    )
  }
}

module.exports = Forecast;
