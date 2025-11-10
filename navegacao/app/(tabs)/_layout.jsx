import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs
        screenOptions={{
                headerStyle: { backgroundColor: "#E95560" },
                headerTintColor: "#FFFFFF",
                tabBarActiveTintColor: "#E94560",
                tabBarInactiveTintColor: "gray"
            }}
        >
            <Tabs.Screen name="index" options={{
                tabBarIcon: ({color})=> <FontAwesome name="home" size={24} color={color} />,
                title: "Home"
            }}/>
            <Tabs.Screen name="settings"
            options={{
                tabBarIcon: ({color})=> <FontAwesome name="cog" size={24} color={color} />,
                title: "Settings"
            }}/>

            <Tabs.Screen name="products"
            options={{
                tabBarIcon: ({color})=> <FontAwesome name="shopping-bag" size={24} color={color} />,
                title: "Produtos"
            }}/>
        </Tabs>
    );
}