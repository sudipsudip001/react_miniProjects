import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

export default function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`
      );
      setWeatherData(response.data);
    } catch(error) {
      console.log("Error fetching data: ", error);
    }
  }
  
  useEffect(() => {
    if(location) {
      fetchWeatherData();
    }
  }, [location]);


  return (
    <>
      <h1>Weather application</h1>
      <input 
        type="text" 
        placeholder="Enter location" 
        onChange={(e) => setLocation(e.target.value)} 
      />
      {weatherData && (
        <>
          <h2>Weather of {weatherData.location.name}</h2>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Weather: {weatherData.current.condition.text}</p>
          <p>Humidity: {weatherData.current.humidity}</p>
          <p>Wind speed: {weatherData.current.wind_mph}mph</p>
        </>
      )}
    </>
  );
}