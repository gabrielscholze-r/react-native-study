import { Alert, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from "../assets/images/check.png";
import Task from "../components/Task";
import { colors } from "../constants/colors";

export default function RootLayout() {

  const tasks = [
    { id: 1, completed: true, text: "Fazer café" },
    { id: 2, completed: false, text: "Estudar React" },
    { id: 3, completed: true, text: "Academia" },
  ]

  return (
    <SafeAreaView style={style.mainContainer}>
      <ScrollView>

        <View style={style.rowContainer}>
          <Image source={logo} style={style.image} />
          <Text style={style.title}>meu cu</Text>
        </View>

        <View style={style.rowContainer}>
          <TextInput style={style.input} />
          <Pressable
            onPress={() => Alert.alert("Oi")}
            style={({ pressed }) => [
              style.button,
              { backgroundColor: pressed ? "blue" : colors.primary }
            ]}
          >
            <Text style={style.buttonText}>+</Text>
          </Pressable>
        </View>
            <FlatList
            data={tasks}
            renderItem={({item}) => <Task text={item.text}/>}
            />
        <View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


const style = StyleSheet.create({
  image: {
    width: 50,
    height: 50
  },
  title: {
    fontSize: 30,
    fontFamily: "Calibri",
    fontWeight: 600,
    color: colors.primary
  },
  input: {
    height: 40,
    paddingHorizontal: 16,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    flexGrow: 1
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 20
  },
  mainContainer: {
    margin: 20
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginBottom: 20
  }
})