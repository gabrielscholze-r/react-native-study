import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Animated, Pressable, StyleSheet, Text } from "react-native";
import { Directions, Gesture, GestureDetector } from "react-native-gesture-handler";
import { colors } from "../constants/colors";

export default function Task({ text, initialCompleted, deleteTask }) {
    const [completed, setCompleted] = useState(initialCompleted)

    const swipe = new Animated.Value(0)
    const flingGesture = Gesture.Fling().direction(Directions.RIGHT).onStart((e) => {
        Animated.timing(swipe,{
            toValue: 500,
            duration: 300
        }).start(() => deleteTask())
    })
    .runOnJS(true)

    return (
        <GestureDetector gesture={flingGesture}>
            <Animated.View
                style={[styles.rowContainer, {transform: [{translateX: swipe}]}]}
            >
                <Pressable
                    onPress={() => setCompleted(!completed)}
                >
                    <Ionicons
                        name="checkmark-circle"
                        size={32}
                        color={completed ? colors.primary : "gray"}
                    />
                </Pressable>
                <Text>{text}</Text>
            </Animated.View>
        </GestureDetector>
    )
}

const styles = StyleSheet.create({
    rowContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginBottom: 10
    }
})