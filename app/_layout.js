import { Stack } from "expo-router"

const RootLayout = () =>
{
    return(
        <Stack screenOptions={{ headerShown : false}}>
            <Stack.Screen name="Home"></Stack.Screen>
            <Stack.Screen name="(tabs)"></Stack.Screen>
            <Stack.Screen name="stats"></Stack.Screen>
        </Stack>
    )
}

export default RootLayout