import { router } from "expo-router"
import { Text, View } from "react-native"
import { styles } from "../../styles/styles"

export default function Settings() {

  const goToHome = () => {
    router.push("/")
  }
  return (
    <View style={[styles.container, { backgroundColor: "#C6DEF1" }]}>
      <Text>Settings</Text>
    </View>
  )
}