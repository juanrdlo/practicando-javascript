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
let latitude = '';
let longitude = '';
const url = 'https://api.openweathermap.org/data/2.5/weather?appid=d7c0002f10a680e17150bd2feb4402c9&units=metric&'

function getWeather() {
    axios.get(`${url}lat=${latitude}&lon=${longitude}`)
        .then(detailsWheather => {
            const details = detailsWheather.data
            temperature.innerHTML = details.main.temp.toFixed(0)
            wind.innerHTML = details.wind.speed.toFixed(0)
            humidity.innerHTML = details.main.humidity
            visibility.innerHTML = details.visibility.toString().substr(0,3)
            pressurization.innerHTML = details.main.pressure
        })
        .catch(() => alert('Ha ocurrido un error. Por favor intentelo de nuevo'))
}

function getWeatherByLocation() {
    navigator.permissions.query({name: 'geolocation'})
        .then(result => {
            switch (result.state) {
                case 'granted':
                case 'prompt':
                    console.log('Todos los permisos fueron aprobados.')
                    break;
                case 'denied':
                    alert('No podemos mostrar el tiempo, por que ha bloqueado los permisos.')
                    break;
            }
            result.onchange = () => {
                switch (result.state) {
                    case 'granted':
                    case 'prompt':
                        console.log('Todos los permisos fueron aprobados.')
                        break;
                    case 'denied':
                        alert('No podemos mostrar el tiempo, por que ha bloqueado los permisos.')
                        break;
                }
            }
        });
    navigator.geolocation.getCurrentPosition(position => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        getWeather()
    });
}

getWeatherByLocation()
