import React, { useEffect, useState } from "react";
import Navsec from "./Navsec";
import axios from "axios";
import {
    Search,
    Droplets,
    Wind,
    Sun,
    CloudRain,
    Leaf,
} from "lucide-react";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;


const WeatherDashboard = () => {
    const [city, setCity] = useState("Pune");
    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        fetchWeather(city);
    }, [city]);

    const fetchWeather = async (cityName) => {
        try {
            const current = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
            );

            const forecastRes = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${API_KEY}`
            );

            setWeather(current.data);

            // Pick one forecast per day
            const daily = forecastRes.data.list.filter((_, i) => i % 8 === 0);
            setForecast(daily);
        } catch (err) {
            alert("City not found");
        }
    };

    const handleSearch = () => {
        if (query.trim()) {
            setCity(query);
            setQuery("");
        }
    };

    if (!weather) return null;

    return (
        
        <div className="min-h-screen bg-[#f6fbf7] p-4 md:p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">
                        Weather & Insights
                    </h1>
                    <p className="text-sm text-green-600">
                        Real-time forecast and farming advice
                    </p>
                </div>

                {/* Search */}
                <div className="flex gap-2">
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search city..."
                        className="px-4 py-2 border rounded-lg outline-none"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-green-500 text-white px-4 rounded-lg"
                    >
                        <Search size={18} />
                    </button>
                </div>
            </div>

            {/* Alert */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                <p className="font-medium text-yellow-800">
                    ⚠ Crop Alert: Heavy Rain Expected
                </p>
                <p className="text-sm text-yellow-700">
                    Delay spraying fertilizers to prevent runoff.
                </p>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Temperature Card */}
                <div className="bg-green-50 rounded-2xl p-6 flex flex-col justify-between">
                    <div className="flex justify-between">
                        <span className="text-xs bg-white px-2 py-1 rounded-full">
                            NOW
                        </span>
                        <Sun className="text-yellow-500" />
                    </div>

                    <div>
                        <h2 className="text-5xl font-bold">
                            {Math.round(weather.main.temp)}°C
                        </h2>
                        <p className="text-green-700 capitalize">
                            {weather.weather[0].description}
                        </p>
                    </div>

                    <div className="flex gap-6 text-sm mt-4">
                        <div className="flex items-center gap-1">
                            <Droplets size={16} /> {weather.main.humidity}%
                        </div>
                        <div className="flex items-center gap-1">
                            <Wind size={16} /> {weather.wind.speed} km/h
                        </div>
                    </div>
                </div>

                {/* Insights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:col-span-2">
                    <Insight title="Soil Moisture" value="High (65%)" note="Optimal for sowing" icon={<Droplets />} />
                    <Insight title="UV Index" value="7 (High)" note="Wear protection" icon={<Sun />} />
                    <Insight title="Leaf Wetness" value="Dry" note="Low fungal risk" icon={<Leaf />} />
                    <Insight title="Evaporation" value="4 mm/day" note="Normal rate" icon={<CloudRain />} />
                </div>
            </div>

            {/* Forecast */}
            <div className="mt-10">
  <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
    📅 5-Day Forecast
  </h3>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
    {forecast.map((day, i) => (
      <div
        key={i}
        className="bg-white rounded-2xl border border-gray-200 
                   px-4 py-6 text-center shadow-sm
                   hover:shadow-md hover:-translate-y-1 
                   transition-all duration-300"
      >
        {/* Day */}
        <p className="text-sm font-medium text-gray-700 mb-3">
          {new Date(day.dt_txt).toLocaleDateString("en-US", {
            weekday: "short",
          })}
        </p>

        {/* Weather Icon */}
        <div className="flex justify-center mb-3">
          <img
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt="weather"
            className="w-16 h-16"
          />
        </div>

        {/* Temperature */}
        <p className="text-2xl font-semibold text-gray-900">
          {Math.round(day.main.temp)}°
        </p>

        {/* Description */}
        <p className="text-xs text-gray-500 capitalize mt-1">
          {day.weather[0].description}
        </p>
      </div>
    ))}
  </div>
</div>

        </div>
    );
};

const Insight = ({ title, value, note, icon }) => (
    <div className="bg-white rounded-xl p-4 flex gap-3">
        <div className="bg-green-100 p-2 rounded-lg text-green-600">
            {icon}
        </div>
        <div>
            <p className="text-sm font-medium">{title}</p>
            <p className="font-semibold">{value}</p>
            <p className="text-xs text-green-600">{note}</p>
        </div>
    </div>
);

export default WeatherDashboard;
