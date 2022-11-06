import "./Weather.css";
import Bootstrap from "./Bootstrap.js";

export default function Weather() {
  let City = "New York";
  let Day = "Monday";
  let Time = "3:16pm";
  let Description = "Cloudy";
  let Temp = 75;
  let Humidity = 50;
  let Wind = 5;

  return (
    <div className="weather-app-wrapper">
      <div className="weather-app">
        <form>
          <div className="row">
            <div className="col-7 searchBar">
              <input
                type="search"
                className="form-control rounded"
                placeholder="search for a city..."
                id="city-input"
                autocomplete="off"
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary"
                id="search-button"
              />
            </div>
            <div className="col-2">
              <button className="btn btn-success">Current</button>
            </div>
          </div>
        </form>
        <div className="general-location-info">
          <h1 id="city">{City}</h1>
          <ul>
            <li>
              Last Updated:
              <span>{Day} </span>
              <span>{Time}</span>
            </li>
            <li>
              <span className="description">{Description}</span>
            </li>
          </ul>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temp">
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="clouds"
                id="icon"
                className="float-left"
              />
              <span className="float-left temp">
                <strong>{Temp}</strong>

                <span className="units"> ℉ </span>
              </span>
            </div>
          </div>

          <div className="col-6">
            <ul>
              <li>
                Humidity: <span id="humidity">{Humidity}</span>%
              </li>
              <li>
                Wind: <span id="wind">{Wind}</span> mph
              </li>
            </ul>
          </div>
        </div>

        <div className="weather-forecast">
          <div className="row" id="days">
            Forecast
          </div>
        </div>
      </div>

      <small>
        <a href="https://github.com/Eyetsko/React-Weather-App">
          Open-source code
        </a>
        by Emily Yetsko
      </small>
      <Bootstrap />
    </div>
  );
}
