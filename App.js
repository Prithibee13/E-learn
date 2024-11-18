import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import HomeScreens from "./Screens/HomeScreen";
export default function App() {
  
  return (
    <NavigationContainer>
      <HomeScreens/>
    </NavigationContainer>
  );
}
