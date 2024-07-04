import React from 'react';

const Forecast = ({ forecastData }) => {
  const forecastList = forecastData.list.filter((_, index) => index % 8 === 0);
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
      <h2 className="text-2xl font-bold mb-4">5 Ngày Tiếp Theo</h2>
      <div className="space-y-4">
        {forecastList.map((forecast, index) => {
          const iconUrl = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`;

          return (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
              <div className="flex items-center">
                <img src={iconUrl} alt="Weather Icon" className="w-12 h-12 mr-4" />
                <div>
                  <p className="font-semibold">{new Date(forecast.dt_txt).toLocaleDateString()}</p>
                  <p>{forecast.weather[0].description}</p>
                </div>
              </div>
              <div>
                <p className="font-semibold">{forecast.main.temp}°C</p>
                <p>Độ ẩm: {forecast.main.humidity}%</p>
                <p>Gió: {forecast.wind.speed} m/s</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;
