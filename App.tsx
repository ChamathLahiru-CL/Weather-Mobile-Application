import { useEffect, useState } from "react";
import { View, ActivityIndicator, ScrollView } from "react-native";
import CityPicker from "./components/CityPicker";
import WeatherDetails from "./components/WeatherDetails";
import { CITIES, CityKey } from "./utils/constants";
import { WeatherData } from "./utils/types";

export default function App() {
  const [city, setCity] = useState<CityKey>("Colombo");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchWeather();
  }, [city]);

  const fetchWeather = async () => {
    setLoading(true);
    const { latitude, longitude } = CITIES[city];

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=sunrise,sunset&timezone=auto`;

    const res = await fetch(url);
    const data = await res.json();

    setWeather({
      temperature: data.current_weather.temperature,
      windspeed: data.current_weather.windspeed,
      weathercode: data.current_weather.weathercode,
      sunrise: data.daily.sunrise[0],
      sunset: data.daily.sunset[0],
    });

    setLoading(false);
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <CityPicker selectedCity={city} onChange={setCity} />

      {loading && <ActivityIndicator size="large" />}

      {weather && <WeatherDetails data={weather} />}
    </ScrollView>
  );
}
