import { Link } from "expo-router"
import { Text, View } from "react-native"
import { styles } from "../styles/styles"

export default function NotFound() {
    return (
        <View style={[styles.container, { backgroundColor: "#F7D9C4" }]}>
            <Text>Essa pagina não existe</Text>
            <Link replace href="/">Ir para Home ➡️</Link>
        </View>
    )
}