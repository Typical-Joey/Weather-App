const https = require("https");
const bodyParser = require("body-parser");
const express = require("express");
const _ = require("lodash");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

const cities = []; // Array of all cities that will be shown
let errorMsg = "";

// Home page
app.get("/", function (req, res) {
  res.render("home", {
    cities: cities,
    errorMsg: errorMsg,
  });
});

// A function to check if a city is in the cities
function isUsed(arr, obj) {
  if (arr.length !== 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === obj.name) {
        return true;
      } else if (arr[i].name !== obj.name && i == arr.length) {
        return false;
      } else if (i === arr.length) {
        return false;
      }
    }
  } else {
    return false;
  }
}

// Check cities weather
app.post("/", function (req, res) {
  const cityName = req.body.cityName;
  const appID = "5935adbebdf1729bb2c733d30b56d995";
  const unit = "imperial";

  // API Endpoint
  const url =
    "https://api.openweathermap.org/data/2.5/weather/?q=" +
    cityName +
    "&appid=" +
    appID +
    "&units=" +
    unit;

  // Send API Request
  https.get(url, function (response) {
    response.on("data", function (data) {
      // try is used to check if city name is valid or to ensure nothing went wrong when making the request
      try {
        const weatherData = JSON.parse(data);
        // console.log(weatherData);
        var temp = weatherData.main.temp;
        var description = weatherData.weather[0].description;
        const iconID = weatherData.weather[0].icon;
        const icon = "https://openweathermap.org/img/wn/" + iconID + "@2x.png";
        const date = new Date();
        const time = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;

        const city = {
          name: _.startCase(_.toLower(cityName)),
          weather: description,
          temp: temp + "°",
          icon: icon,
          time: time,
        };

        // Checking to see if city is already being shown
        if (isUsed(cities, city)) {
          errorMsg = "City Exists";
        } else {
          cities.push(city);
          errorMsg = "";
        }
      } catch (err) {
        // Checking to see if a valid city was entered or if something else went wrong
        errorMsg =
          "Something went wrong! Please make sure you entered a valid city.";
      } finally {
        res.redirect("/");
      }
    });
  });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
