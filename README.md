# ThirstTrap 📸

A React Native (Expo) app for capturing the perfect thirst trap photo.

## Features

- **Camera Access** - Take photos using your front-facing camera
- **Gallery Picker** - Choose existing photos from your gallery
- **Image Preview** - Preview your captured photos before saving

## Getting Started

### Prerequisites

- Node.js 18+
- Expo CLI
- iOS Simulator or physical device

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npx expo start
```

### Running

- **iOS**: Press `i` to run on iOS simulator
- **Android**: Press `a` to run on Android emulator
- **Web**: Press `w` to run in browser

## Tech Stack

- [Expo](https://expo.dev) - React Native framework
- [expo-camera](https://docs.expo.dev/versions/latest/sdk/camera/) - Camera access
- [expo-image-picker](https://docs.expo.dev/versions/latest/sdk/image-picker/) - Gallery access
- [expo-router](https://expo.github.io/router/) - File-based routing
- [NativeWind](https://www.nativewind.dev/) - Tailwind CSS for React Native

## License

MIT

## API Configuration

### Environment Variables

Create a `.env` file in the project root:

```bash
# Drink/Hydration API (optional - for hydration tracking)
HYDRATION_API_KEY=your_hydration_api_key
HYDRATION_API_URL=https://api.thirsttrap.com/v1

# Water Reminder Service
WATER_API_KEY=your_water_api_key
```

### RevenueCat Configuration

1. Create an account at [RevenueCat.com](https://revenuecat.com)
2. Create products in App Store Connect / Google Play Console:
   - Monthly: $1.99/month - `thirsttrap_monthly`
   - Annual: $9.99/year - `thirsttrap_annual`
3. Configure products in RevenueCat dashboard
4. Add your API key to the purchases service
