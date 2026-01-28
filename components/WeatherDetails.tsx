import { View, Text, StyleSheet } from "react-native";
import { WEATHER_CODES } from "../utils/constants";
import { WeatherData } from "../utils/types";

interface Props {
    data: WeatherData;
    city: string;
}

export default function WeatherDetails({ data, city }: Props) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>Weather in {city}</Text>

            <Text style={styles.icon}>
                {WEATHER_CODES[data.weathercode] || "🌍"}
            </Text>

            <Text style={styles.label}>Temperature: {data.temperature}°C</Text>
            <Text style={styles.label}>Wind: {data.windspeed} km/h</Text>
            <Text style={styles.label}>Sunrise: {data.sunrise}</Text>
            <Text style={styles.label}>Sunset: {data.sunset}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 20,
        marginTop: 16,
        alignItems: "center",

        // Shadow (Android + Web)
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 4,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 12,
    },
    icon: {
        fontSize: 72, // 🔥 big emoji like your image
        marginVertical: 12,
    },
    label: {
        fontSize: 14,
        marginVertical: 2,
        color: "#333",
    },
});
