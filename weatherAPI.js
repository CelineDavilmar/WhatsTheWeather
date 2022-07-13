
const apiKey = d3c6ad0c8ddd4caa5b1ae0d07f82e628;
const inputVal = input.value;

const appurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${33.44}&lon=${-94.04}&exclude=hourly,daily&appid=${apiKey}`;
fetch(appurl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(() => {
        console.log("Please search for a valid city 😩");
    });