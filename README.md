# 🚀 Expo Mobile App Template with Tailwind CSS + Babel

A ready-to-use **Expo** mobile app template preconfigured with **Tailwind CSS** (via NativeWind), **Babel**, and **Expo Router** for seamless development. This template is perfect for quickly starting your next React Native project with modern styling and tooling.

---

## ✨ Features

- **Tailwind CSS Integration**: Use Tailwind utility classes directly in your React Native components with [NativeWind](https://nativewind.dev/).
- **Expo Router**: File-based routing for easy navigation and organization.
- **Babel Configuration**: Preconfigured with `babel-preset-expo` and NativeWind plugin for optimal performance.
- **TypeScript Support**: Built with TypeScript for type-safe development.
- **Ready-to-Go Structure**: Includes a clean folder structure with `app` directory, components, and hooks.

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (install globally via `npm install -g expo-cli`)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repo-name
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   expo start
   ```

---

## 🗂️ Folder Structure

```
my-expo-app/
├── app/               # Expo Router file-based routing
│   ├── (tabs)/        # Example tab navigation
│   ├── _layout.tsx    # Root layout for the app
│   └── index.tsx      # Home screen
├── components/        # Reusable components
├── hooks/             # Custom hooks
├── assets/            # Static assets (images, fonts, etc.)
├── global.css         # Tailwind CSS global styles
├── tailwind.config.js # Tailwind configuration
├── babel.config.js    # Babel configuration
├── package.json       # Project dependencies
└── README.md          # Project documentation
```

---

## 🎨 Using Tailwind CSS

This template uses [NativeWind](https://nativewind.dev/) to bring Tailwind CSS to React Native. You can use Tailwind classes directly in your components via the `className` prop.

### Example:

```typescript
import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-blue-500 text-2xl">Hello, Tailwind CSS!</Text>
    </View>
  );
}
```

---

## 🛠️ Customizing Tailwind

To customize Tailwind CSS, edit the `tailwind.config.js` file. For example, you can add custom colors, fonts, or breakpoints.

### Example `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // Include all files in the app directory
    "./components/**/*.{js,jsx,ts,tsx}", // Include your components
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#FF6347", // Add custom colors
      },
    },
  },
  plugins: [],
};
```

---

## 🚦 Expo Router

This template uses **Expo Router** for file-based routing. All routes are defined in the `app` directory.

### Example Routes:

- `app/index.tsx` → Home screen
- `app/(tabs)/explore.tsx` → Explore screen
- `app/+not-found.tsx` → 404 page

For more details, check out the [Expo Router documentation](https://docs.expo.dev/routing/).

---

## 📦 Dependencies

This template uses the following key dependencies:

- [Expo](https://expo.dev/) - Build native apps with React.
- [NativeWind](https://nativewind.dev/) - Tailwind CSS for React Native.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript.

---

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🙌 Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

---

## 📄 Credits

- Built with ❤️ by [Jahid Hossan](https://github.com/Jahid-Hossan).
- Inspired by [Expo](https://expo.dev/) and [Tailwind CSS](https://tailwindcss.com/).

---

Enjoy building your next mobile app with this template! 🚀

---

Feel free to customize this `README.md` further to match your specific needs or add additional sections like **FAQ**, **Changelog**, or **Acknowledgements**. Let me know if you need help with anything else! 😊
