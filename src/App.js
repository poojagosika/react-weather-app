import './App.css';
import WeatherRight from './WeatherRight';
import { useEffect, useState } from "react";
import axios from 'axios';
import WeatherLeft from './WeatherLeft';

function App() {
  const ApiKey = "0007899c56af57c520ae8f6fd2c4022c";
  const [city, setCity] = useState();
  const [data, setData] = useState();

  const url = (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`);

  useEffect(() =>{
    axios.get(url).then((response) =>  
      setData(response.data))
  }, [url])


  function handler(event)
  {
    setCity(event.target.value)
  }

  return (
    <>
      <div className="weather-main">
        <div className="weather-left">
            <WeatherLeft/>
            <div className="weather-search">
              <i className="fa-solid fa-magnifying-glass" />
              <input type="text" placeholder="Enter Your City..." value={city} onChange={handler}/>
              <i className="fa-solid fa-location-dot" />
            </div>
        </div>
        <WeatherRight data={data}/>
      </div>
    </>
  );
}

export default App;
