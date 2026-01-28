import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { CITIES, CityKey } from "../utils/constants";

interface Props {
  selectedCity: CityKey;
  onChange: (city: CityKey) => void;
}

export default function CityPicker({ selectedCity, onChange }: Props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Sri Lanka Weather App</Text>

      <View style={styles.pickerCard}>
        <Picker
          selectedValue={selectedCity}
          onValueChange={onChange}
        >
          {Object.keys(CITIES).map(city => (
            <Picker.Item key={city} label={city} value={city} />
          ))}
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
    color: "#2A6FDB",
  },
  pickerCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 3,
  },
});
