const temperature = document.getElementById('temperature');
const grade = document.getElementById('temparature');
const date = document.getElementById('date');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');
const visibility = document.getElementById('visibility');
const pressurization = document.getElementById('pressurization');

// SET MOMENT ES
date.innerHTML = moment().format('dddd DD MMMM YYYY');

// API
const woeid = null;
const latitude = '36.96';
const longitude = '-122.02';
const url = 'https://samples.openweathermap.org/data/2.5/weather?appid=d7c0002f10a680e17150bd2feb4402c9&'

function getWeather() {
    axios.get(`${url}lat=${latitude}&lon=${longitude}`)
        .then(details => {
            console.log(details)
        })
}

function getWeatherByLocation() {

}

getWeather()
