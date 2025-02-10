import { StatusBar, StyleSheet, Text, View } from "react-native";
import HomeScreens from "../Screens/HomeScreen";
import { Link, Stack } from 'expo-router'


export default function Page() {
  return (
    <>
    <StatusBar hidden={true}></StatusBar>
    <View style={styles.container}>
      
      <HomeScreens></HomeScreens>
      </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    
  },
});
