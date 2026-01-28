import { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, ActivityIndicator, Text } from "react-native";
import CityPicker from "./components/CityPicker";
import WeatherDetails from "./components/WeatherDetails";
import { CITIES, CityKey } from "./utils/constants";
import { WeatherData } from "./utils/types";

export default function App() {
  const [city, setCity] = useState<CityKey>("Colombo");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("City changed to:", city);
    fetchWeather();
  }, [city]);

  const fetchWeather = async () => {
    console.log("Fetching weather for:", city);
    try {
      setLoading(true);

      const { latitude, longitude } = CITIES[city];

      const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=sunrise,sunset&timezone=auto`;

      console.log("Fetching weather from:", url);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      // Debug: Log the API response
      console.log("API Response:", data);

      // Validate API response structure
      if (!data.current_weather) {
        throw new Error("API response missing current_weather data");
      }

      if (!data.daily || !data.daily.sunrise || !data.daily.sunset) {
        throw new Error("API response missing daily sunrise/sunset data");
      }

      setWeather({
        temperature: data.current_weather.temperature,
        windspeed: data.current_weather.windspeed,
        weathercode: data.current_weather.weathercode,
        sunrise: data.daily.sunrise[0],
        sunset: data.daily.sunset[0],
      });

      console.log("Weather data updated for", city, ":", {
        temperature: data.current_weather.temperature,
        weathercode: data.current_weather.weathercode
      });

    } catch (error) {
      console.error("Weather API error:", error);
      // You could also set an error state here to show to the user
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.page}>
      <View style={styles.container}>
        <CityPicker selectedCity={city} onChange={setCity} />

        {loading && <ActivityIndicator size="large" color="#4A90E2" />}

        {weather && <WeatherDetails data={weather} city={city} />}

        <Text style={styles.footer}>Powered by Open-Meteo API</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#EAF4FF",
    paddingVertical: 40,
  },
  container: {
    width: "100%",
    maxWidth: 380, // 🔑 responsiveness on web
    paddingHorizontal: 16,
  },
  footer: {
    textAlign: "center",
    color: "#777",
    fontSize: 12,
    marginTop: 20,
  },
});
