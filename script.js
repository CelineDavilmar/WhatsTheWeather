const apiKey = "d3c6ad0c8ddd4caa5b1ae0d07f82e628";
const inputVal = input.value;

const appurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${33.44}&lon=${-94.04}&exclude=hourly,daily&appid=${apiKey}`;

var weatherApp = {
    getWeather: function (city) {
        fetch(appurl)
            .then(response => response.json())
            .then(data => this.showWeatherApp(data));
    },
    showWeatherApp: function (data) {
        const { main, name } = data;
        const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]
            }@2x.png`;
        const description = data.weather[0]
        const { humidity, temp } = data.main;

        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".humidity").innerText = humidity + "%";
        document.querySelector(".wind").innerText = speed + "mph";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";



        //const li = document.createElement("li");
        li.classList.add("city");
        const markup = `
        <div class="weather-component">
        <h2 data-name="${name},${sys.country}">
            <span>${name}</span>
            <sup>${sys.country}</sup>
        </h2>
        <div>${description}</div>
        <div>${Math.round(main.temp)}<sup>°C</sup>
        <div>${humidity}<sup>°C</sup>
        <div>${temp}<sup>°C</sup>
        </div>
        <figure>
            <img src=${icon} alt=${weather[0]["main"]}>
            <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
        </div>
        `;
        li.innerHTML = markup;
        list.appendChild(li);
    },
    submit: function () {
        this.showWeatherApp(document.querySelector(".submit").value)
    }
};
document.getElementByClass("submit").addEventListener("click", function () {
    weather.submit();
    /* .catch (() => {
    console.log("Please search for a valid city!"); */
});


const form = document.querySelector(".Weather-Search");

form.addEventListener("submit", e => {
    e.preventDefault();
    const listItems = list.querySelectorAll(".city");
    const inputVal = input.value;
});


