import { StyleSheet, Text, View } from "react-native";
import HomeScreens from "../Screens/HomeScreen";
import { Link, Stack } from 'expo-router'


export default function Page() {
  return (
    <View style={styles.container}>
      <HomeScreens></HomeScreens>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
});
