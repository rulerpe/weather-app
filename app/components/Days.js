
var React = require('react');
var moment = require('moment');
var PropTypes = require('prop-types');

function Days(props){
  return (
    <div className='forecast-container'>
      {props.weathers.map(function(weather,index){
        return (
          <div key={'day'+index} className='dayContainer'>
            <img className='weather' src={'/app/images/weather-icons/'+weather.weather[0].icon + '.svg'} />
            <h2 className='subheader'>{moment().add(index,'days').format('dddd, MMMM Do')}</h2>
          </div>
        )
      })}
    </div>
  )
}
Days.propTypes = {
  weathers: PropTypes.array.isRequired
}
module.exports = Days;
