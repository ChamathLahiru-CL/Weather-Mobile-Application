import { View, Text } from "react-native";
import { WEATHER_CODES } from "../utils/constants";
import { WeatherData } from "../utils/types";

interface Props {
    data: WeatherData;
}

export default function WeatherDetails({ data }: Props) {
    return (
        <View>
            <Text style={{ fontSize: 60 }}>
                {WEATHER_CODES[data.weathercode]}
            </Text>
            <Text>Temperature: {data.temperature}°C</Text>
            <Text>Wind: {data.windspeed} km/h</Text>
            <Text>Sunrise: {data.sunrise}</Text>
            <Text>Sunset: {data.sunset}</Text>
        </View>
    );
}
