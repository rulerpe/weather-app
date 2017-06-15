var axios = require('axios');

module.exports = {
  fetchCurrentWeather : function(location){
    var apiKey = '56c552d663f26c14aba65996a2119c18';
    var encodedURI = window.encodeURI('http://api.openweathermap.org/data/2.5/weather?q='+location+'&type=accurate&APPID='+apiKey)

    return axios.get(encodedURI)
      .then(function(response){
        return response
      })
  },
  fetchFiveDayWeather : function(location){
    var apiKey = '56c552d663f26c14aba65996a2119c18';
    var encodedURI = window.encodeURI('http://api.openweathermap.org/data/2.5/forecast/daily?q='+location+'&type=accurate&APPID='+apiKey+'&cnt=5')

    return axios.get(encodedURI)
      .then(function(response){
        return response
      })
  }

}
