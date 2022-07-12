/* var getWeatherRepos = function (lat, lon) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + { lat } + "&lon=" + { lon } + "&exclude={part}&appid={API key}";

    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
        });
    });
}; */

const apiKey = d3c6ad0c8ddd4caa5b1ae0d07f82e628;
const inputVal = input.value;

const appurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${apiKey}`;
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(() => {
        console.log("Please search for a valid city 😩");
    });