import { useState } from "react";
import { Alert, FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from "../assets/images/check.png";
import Task from "../components/Task";
import { colors } from "../constants/colors";

const initialTasks = [
    { id: 1, completed: true, text: "Fazer café" },
    { id: 2, completed: false, text: "Estudar React" },
    { id: 3, completed: true, text: "Academia" },
  ]

export default function RootLayout() {
  const [tasks, setTasks] = useState(initialTasks)
  const [text, setText] = useState("")
  
  const addTask = () => {
    const newTask = {id: tasks.length+1, completed: false, text}
    setTasks([...tasks, newTask])
    setText("")
  }

  return (
    <SafeAreaView style={style.mainContainer}>

        <View style={style.rowContainer}>
          <Image source={logo} style={style.image} />
          <Text style={style.title}>Minhas tarefas</Text>
        </View>

        <View style={style.rowContainer}>
          <TextInput style={style.input} value={text} onChangeText={setText}/>
          <Pressable
            onPress={addTask}
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
            renderItem={({item}) => <Task text={item.text} initialCompleted={item.completed}/>}
            />
        <View>

        </View>
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