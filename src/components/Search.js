import React, { useState, useEffect } from 'react';
import Weather from '@components/Weather';
import Forecast from '@components/Forecast';


const DEFAULT_LOCATION = 'Ha Dong';

function Search() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [location, setLocation] = useState(DEFAULT_LOCATION);
  const [error, setError] = useState('');

  const fetchWeatherData = async (location) => {
    try {
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
      if (!weatherResponse.ok) {
        throw new Error('Vị trí không hợp lệ');
      }
      const weatherData = await weatherResponse.json();
      setWeatherData(weatherData);

      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
      if (!forecastResponse.ok) {
        throw new Error('Vị trí không hợp lệ');
      }
      const forecastData = await forecastResponse.json();
      setForecastData(forecastData);

      setError('');
    } catch (error) {
      setError('Vị trí không được tìm thấy. Vui lòng nhập đúng địa chỉ.');
      setWeatherData(null);
      setForecastData(null);
    }
  };

  useEffect(() => {
    fetchWeatherData(DEFAULT_LOCATION);
  }, []);

  const getLocation = async () => {
    if (location) {
      fetchWeatherData(location);
    } else {
      setError('Hãy nhập tên vị trí !');
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Nhập vị trí"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-4 py-2 border rounded-l-lg focus:outline-none"
        />
        <button
          onClick={getLocation}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none"
        >
          Xem
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex flex-col md:flex-row w-full max-w-4xl space-x-4">
        {weatherData && (
          <div className="w-full md:w-1/2">
            <Weather weatherData={weatherData} />
          </div>
        )}
        {forecastData && (
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <Forecast forecastData={forecastData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
