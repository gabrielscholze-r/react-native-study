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
            <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
            <Stack.Screen name="+not-found" options={{ headerTitle: "Erro" }}/>
        </Stack>
        </>
    )
}