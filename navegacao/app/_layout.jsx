import { Stack } from "expo-router"
import { StatusBar } from "react-native"

export default function RootLayout() {
    return (
    <>
        <StatusBar style="light" backgroundColor="#E95560" />
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: "#E95560" },
                headerTintColor: "#FFFFFF"
            }}
        >
            <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
            <Stack.Screen name="settings" options={{ headerTitle: "Settings" }} />
            <Stack.Screen name="user" options={{ headerTitle: "User" }}/>
        </Stack>
        </>
    )
}