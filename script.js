const apiKey = "d3c6ad0c8ddd4caa5b1ae0d07f82e628";
const inputVal = input.value;

const appurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${33.44}&lon=${-94.04}&exclude=hourly,daily&appid=${apiKey}`;
fetch(appurl)
    .then(response => response.json())
    .then(data => {
        const { main, city, sys, weather } = data;
        const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]
            }@2x.png`;

        const li = document.createElement("li");
        li.classList.add("city");
        const markup = `
        <div class="weather-component">
        <h2 data-name="${city},${sys.country}">
            <span>${city}</span>
            <sup>${sys.country}</sup>
        </h2>
        <div>${Math.round(main.temp)}<sup>°C</sup>
        </div>
        <figure>
            <img src=${icon} alt=${weather[0]["main"]}>
            <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
        </div>
`;
        li.innerHTML = markup;
        list.appendChild(li);
    })
    .catch(() => {
        console.log("Please search for a valid city!");
    });


const form = document.querySelector(".Weather-Search");

form.addEventListener("submit", e => {
    e.preventDefault();
    const listItems = list.querySelectorAll(".city");
    const inputVal = input.value;
});
