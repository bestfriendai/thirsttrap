module.exports = {
  name: "ThirstTrap",
  slug: "thirsttrap",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "dark",
  scheme: "thirsttrap",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ff2d55"
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.thirsttrap.app",
    infoPlist: {
      NSCameraUsageDescription: "ThirstTrap needs camera access to take photos",
      NSPhotoLibraryUsageDescription: "ThirstTrap needs photo library access to save photos"
    }
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/icon.png",
      backgroundColor: "#ff2d55"
    },
    package: "com.thirsttrap.app",
    permissions: ["CAMERA", "READ_EXTERNAL_STORAGE", "WRITE_EXTERNAL_STORAGE"]
  },
  plugins: [
    "expo-router",
    [
      "expo-camera",
      {
        cameraPermission: "Allow ThirstTrap to access your camera."
      }
    ],
    [
      "expo-image-picker",
      {
        cameraPermission: "Allow ThirstTrap to access your camera.",
        photosPermission: "Allow ThirstTrap to access your photos."
      }
    ]
  ],
  extra: {
    revenuecat_api_key: "rcap_key_placeholder"
  }
};
