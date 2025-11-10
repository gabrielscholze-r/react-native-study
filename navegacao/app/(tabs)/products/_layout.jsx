import { Stack } from "expo-router";

export default function ProductsLayout() {
    return(
        <Stack
        screenOptions={{
                headerStyle: { backgroundColor: "#E95560" },
                headerShown: false
            }}
        >
            <Stack.Screen name="index"/>
            <Stack.Screen name="products/[id]"/>
        </Stack>
    )
}