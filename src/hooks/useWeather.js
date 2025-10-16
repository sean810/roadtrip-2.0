import { useState, useEffect } from "react";
import axios from "axios";

const CACHE_KEY = "weather_cache";
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

export function useWeather(cities) {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const key = import.meta.env.VITE_OPENWEATHER_KEY;

  useEffect(() => {
    async function fetchWeather() {
      const cached = localStorage.getItem(CACHE_KEY);
      const cacheData = cached ? JSON.parse(cached) : null;
      
      if (cacheData && Date.now() - cacheData.timestamp < CACHE_DURATION) {
        setWeather(cacheData.data);
        setLoading(false);
        return;
      }

      if (!key) {
        setWeather({
          Nairobi: { temp: 24, desc: "Partly cloudy" },
          Mombasa: { temp: 29, desc: "Sunny" },
          Kisumu: { temp: 23, desc: "Showers" }
        });
        setLoading(false);
        return;
      }

      try {
        const results = {};
        for (const c of cities) {
          const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${c.lat}&lon=${c.lon}&units=metric&appid=${key}`
          );
          results[c.name] = {
            temp: Math.round(res.data.main.temp),
            desc: res.data.weather[0].description
          };
        }
        setWeather(results);
        localStorage.setItem(CACHE_KEY, JSON.stringify({ data: results, timestamp: Date.now() }));
      } catch (err) {
        console.error("Weather fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [key]);

  return { weather, loading, error };
}