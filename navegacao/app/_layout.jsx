import { FontAwesome } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { router } from 'expo-router';
import Drawer from 'expo-router/drawer';
import { StatusBar } from "react-native";

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView>
            <DrawerItem 
            icon={({color}) => <FontAwesome size={28} name="user" color={color}/>}
            label={"User"}
            onPress={() => router.push("/user")}
            />
        </DrawerContentScrollView>
    )
}


export default function RootLayout() {
    return (
    <>
        <StatusBar style="light" backgroundColor="#E95560" />
        <Drawer
            drawerContent={CustomDrawerContent}
            screenOptions={{
                headerStyle: { backgroundColor: "#E95560" },
                headerTintColor: "#FFFFFF"
            }}
        >
            <Drawer.Screen name="(tabs)" options={{headerShown: false}}/>
            <Drawer.Screen name="+not-found" options={{ headerTitle: "Erro" }}/>
        </Drawer>
        </>
    )
}