import { Link } from "expo-router"
import { Text, View } from "react-native"
import { styles } from "../styles/styles"

export default function Home() {
  return (
    <View style={[styles.container, { backgroundColor: "#FAEDCB" }]}>
      <Text>Home</Text>
      <Link push href={"/user"}>
        Usuarios
      </Link>
    </View>
  )
}