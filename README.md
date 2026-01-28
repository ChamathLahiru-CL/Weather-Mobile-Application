# 🌦️ Sri Lanka Weather App

A beautiful, modern weather application for Sri Lanka built with React Native and Expo. Get real-time weather information for major cities across Sri Lanka with a clean, intuitive interface.

![Weather App Preview](https://via.placeholder.com/800x400/4A90E2/FFFFFF?text=Sri+Lanka+Weather+App)

## ✨ Features

- **🏙️ 10 Major Cities**: Weather data for Colombo, Kandy, Galle, Jaffna, Anuradhapura, Trincomalee, Batticaloa, Matara, Negombo, and Kurunegala
- **🌡️ Real-time Weather**: Current temperature, wind speed, and weather conditions
- **🌅 Sunrise & Sunset**: Daily sunrise and sunset times
- **📱 Cross-platform**: Works on iOS, Android, and Web
- **🎨 Modern UI**: Clean card-based design with beautiful weather icons
- **⚡ Fast & Reliable**: Powered by Open-Meteo API with robust error handling
- **🔄 Auto-refresh**: Weather updates automatically when you change cities

## 🚀 Technologies Used

- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and build tools
- **TypeScript** - Type-safe JavaScript
- **Open-Meteo API** - Free weather data API
- **React Native Picker** - Native dropdown component

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development) or Android Studio (for Android development)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ChamathLahiru-CL/Weather-Mobile-Application.git
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on your device**
   - **iOS**: Press `i` in the terminal or scan QR code with Camera app
   - **Android**: Press `a` in the terminal or scan QR code with Expo Go app
   - **Web**: Press `w` in the terminal to open in browser

## 📱 Screenshots & Demo

### 🌟 App Interface

#### City Selection & Weather Display
<img width="382" height="852" alt="image" src="https://github.com/user-attachments/assets/f8ed2860-0722-4447-a794-2c9f9b60a729" />


#### Mobile Layout (Android)
<img width="386" height="858" alt="image" src="https://github.com/user-attachments/assets/6c6f8361-c9d2-4eb5-8479-5ff878f8ad9d" />

<img width="388" height="864" alt="image" src="https://github.com/user-attachments/assets/b1aedfa8-395f-4598-ab53-d9c2c39c0f45" />

<img width="382" height="859" alt="image" src="https://github.com/user-attachments/assets/e6c364dc-9781-453d-8c4a-8d281989f68f" />


### 🎨 UI Features

#### Weather Conditions
<div align="center">
  <img src="https://via.placeholder.com/200x200/FFE4B5/FF6B35?text=Sunny+☀️" alt="Sunny Weather" width="150"/>
  <img src="https://via.placeholder.com/200x200/E0F6FF/4A90E2?text=Rainy+🌧️" alt="Rainy Weather" width="150"/>
  <img src="https://via.placeholder.com/200x200/F0F8FF/666666?text=Cloudy+☁️" alt="Cloudy Weather" width="150"/>
  <img src="https://via.placeholder.com/200x200/FFF8DC/FFA500?text=Storm+⛈️" alt="Storm Weather" width="150"/>
</div>

#### City Coverage
<div align="center">
  <img src="https://via.placeholder.com/400x300/FFE4E1/FF6B9D?text=Sri+Lanka+Map" alt="Sri Lanka Cities Map" width="400"/>
</div>

---

*💡 **Note**: Replace placeholder images with actual screenshots of your app for a professional presentation.*

## 🏗️ Project Structure

```
weather-app/
├── components/
│   ├── CityPicker.tsx      # City selection dropdown
│   └── WeatherDetails.tsx  # Weather information card
├── utils/
│   ├── constants.ts        # Cities and weather codes
│   └── types.ts           # TypeScript interfaces
├── assets/                 # Images and icons
├── App.tsx                # Main application component
├── app.json               # Expo configuration
├── package.json           # Dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

## 🌐 API Information

This app uses the **Open-Meteo API** (https://open-meteo.com/), a free weather API that provides:

- Current weather conditions
- Daily forecasts
- No API key required
- Global coverage including Sri Lanka

### API Endpoint Used:
```
GET https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true&daily=sunrise,sunset&timezone=auto
```

## 🎨 Weather Codes

The app displays weather conditions using intuitive emojis:

- ☀️ Clear sky
- 🌤️ Mainly clear
- ⛅ Partly cloudy
- ☁️ Overcast
- 🌧️ Rain showers
- ⛈️ Thunderstorm
- 🌫️ Foggy
- And many more...

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Use TypeScript for type safety
- Follow React Native best practices
- Test on multiple platforms (iOS, Android, Web)
- Keep the UI clean and responsive

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Open-Meteo** for providing free weather data
- **Expo** for the amazing development platform
- **React Native Community** for excellent components

## 📞 Support

If you have any questions or issues:

- Open an issue on GitHub
- Check the [Expo Documentation](https://docs.expo.dev/)
- Review the [React Native Documentation](https://reactnative.dev/docs/getting-started)

---

**Made with ❤️ for Sri Lanka** 🇱🇰

*Built by Chamath Lahiru*</content>
<parameter name="filePath">d:\.Mobile Computing\weather-app\README.md
