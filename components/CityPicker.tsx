import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { CITIES, CityKey } from "../utils/constants";

interface Props {
  selectedCity: CityKey;
  onChange: (city: CityKey) => void;
}

export default function CityPicker({ selectedCity, onChange }: Props) {
  return (
    <View>
      <Text>Select City</Text>
      <Picker selectedValue={selectedCity} onValueChange={onChange}>
        {Object.keys(CITIES).map(city => (
          <Picker.Item key={city} label={city} value={city} />
        ))}
      </Picker>
    </View>
  );
}
