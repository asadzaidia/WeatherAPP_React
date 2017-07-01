var axios=require('axios');//use for api call

const OWM_URL='http://api.openweathermap.org/data/2.5/weather?&APPID=c7406bb225581429940979bd647603f5&units=metric';


module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);//$/&# encoded
    var requestUrl = `${OWM_URL}&q=${encodedLocation}`;


    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}