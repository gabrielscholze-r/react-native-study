import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { FlatList, Image, Platform, StyleSheet, Text, TextInput, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from "../assets/images/check.png";
import Button from "../components/Button";
import Task from "../components/Task";
import { colors } from "../constants/colors";



export default function RootLayout() {
  const [tasks, setTasks] = useState([])
  const [text, setText] = useState("")

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('tasks');
        setTasks(jsonValue != null ? JSON.parse(jsonValue) : null);
      } catch (e) {
        console.log(e)
      }
    };
    getData()
  }, [])


  useEffect(() => {
    const setTasksAsyncStorage = async () => {
      try {
        const jsonValue = JSON.stringify(tasks)
        await AsyncStorage.setItem('tasks', jsonValue)
      } catch (e) {
        console.log(e)
      }
    }
    setTasksAsyncStorage()
  }, [tasks])

  const addTask = () => {
    const newTask = { id: tasks.length + 1, completed: false, text }
    setTasks([...tasks, newTask])
    setText("")
  }

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={style.mainContainer}>

        <View style={style.rowContainer}>
          <Image source={logo} style={style.image} />
          <Text style={style.title}>Minhas tarefas</Text>
        </View>

        <View style={style.rowContainer}>
          <TextInput style={style.input} value={text} onChangeText={setText} />
          <Button addTask={addTask} />
        </View>
        <FlatList
          data={tasks}
          renderItem={({ item }) => <Task text={item.text} initialCompleted={item.completed} deleteTask={() => setTasks(tasks.filter(t => t.id !== item.id))} />}
        />
        <View>

        </View>

        {Platform.OS === "ios" && <Text>Executando no iOS</Text>}
        {Platform.OS === "android" && <Text>Executando no Android</Text>}
        {Platform.OS === "web" && <Text>Executando na WEB</Text>}

      </SafeAreaView>
    </GestureHandlerRootView>
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