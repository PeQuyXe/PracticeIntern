import React from 'react';

const Weather = ({ weatherData }) => {
  if (!weatherData) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Thời Tiết Hiện Tại</h2>
      <div className="flex items-center">
        <img src={iconUrl} alt="Weather Icon" className="w-16 h-16 mr-4" />
        <div>
          <p className="text-lg"><span className="font-semibold">Khu vực:</span> {weatherData.name}</p>
          <p className="text-lg"><span className="font-semibold">Nhiệt độ:</span> {weatherData.main.temp}°C</p>
          <p className="text-lg"><span className="font-semibold">Độ ẩm:</span> {weatherData.main.humidity}%</p>
          <p className="text-lg"><span className="font-semibold">Áp suất:</span> {weatherData.main.pressure} hPa</p>
          <p className="text-lg"><span className="font-semibold">Tốc độ gió:</span> {weatherData.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
