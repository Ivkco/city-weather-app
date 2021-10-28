/*
link JS file to HTML
button for input field
get access to the input field

create function to fetch API data when button is clicked

*/

var inputField = document.querySelector('#city')
var button = document.querySelector('#get-weather')

function fetchData(){
    var cityName = inputField.value
    var apiKey = 'cfe0ac6cd0d356e62659b7ad76c8f337'
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey
   
    fetch(requestUrl)
    .then(function(response) {
        return response.json()
    })
    .then(function(weatherData) {
        console.log(weatherData)
    })
}

button.addEventListener('click', fetchData)
