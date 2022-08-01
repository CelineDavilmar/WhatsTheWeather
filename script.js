const apiKey = "d3c6ad0c8ddd4caa5b1ae0d07f82e628";
const inputVal = document.querySelector(".input");

//const appurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${33.44}&lon=${-94.04}&exclude=hourly,daily&appid=${apiKey}`;

function getWeather(city) {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            showWeatherApp(data);
        });
};

function showWeatherApp(data) {
    console.log(data);
    console.log(data.city.name);
    console.log(data.city.country);
    console.log(data.list[0].weather[0].icon);
    console.log(data.list[0].main.temp);
    console.log(data.list[0].main.humidity);
    console.log(data.list[0].wind.speed);
    console.log(data.list[0].clouds.dt);
    console.log(data.city.sunset);
    console.log(data.city.sunrise);
    var icon = 'https://openweathermap.org/img/w/' + data.list[0].weather[0].icon + '.png';
    $('#wicon').attr('src', icon);
    F = ((data.list[0].main.temp) * 9) / 5 + 32;
    var temp = Math.round(data.list[0].main.temp);
    var date = data.list[0].dt_txt;
    console.log(date);
    $(document).ready(function () {
        $(".date").html(date);
        $(".city").html("City: " + data.city.name);
        $(".country").html("Country: " + data.city.country);
        $(".temp").html("Temp: " + temp + "F");
        $(".wind").html("Wind Speed: " + data.list[0].wind.speed);
        $(".humidity").html("Humidity: " + data.list[0].main.humidity);

        $(".temp1").html("Temp: " + data.list[1].main.temp);
        $(".wind1").html("Wind Speed: " + data.list[1].wind.speed);
        $(".hum1").html("Humidity: " + data.list[1].main.humidity);

        $(".temp2").html("Temp: " + data.list[2].main.temp);
        $(".wind2").html("Wind Speed: " + data.list[2].wind.speed);
        $(".hum2").html("Humidity: " + data.list[2].main.humidity);

        $(".temp3").html("Temp: " + data.list[3].main.temp);
        $(".wind3").html("Wind Speed: " + data.list[3].wind.speed);
        $(".hum3").html("Humidity: " + data.list[3].main.humidity);

        $(".temp4").html("Temp: " + data.list[4].main.temp);
        $(".wind4").html("Wind Speed: " + data.list[4].wind.speed);
        $(".hum4").html("Humidity: " + data.list[4].main.humidity);

        $(".temp5").html("Temp: " + data.list[5].main.temp);
        $(".wind5").html("Wind Speed: " + data.list[5].wind.speed);
        $(".hum5").html("Humidity: " + data.list[5].main.humidity);
    });

}

function submit() {
    this.showWeatherApp(document.querySelector(".submit").value)
}

var searchedCities = function () {
    localStorage.setItem("cities", JSON.stringify(inputVal.value));
};

var submitButton = document.querySelector(".submit").addEventListener("click", function () {
    //console.log(inputVal.value);
    getWeather(inputVal.value);
    searchedCities();
})


