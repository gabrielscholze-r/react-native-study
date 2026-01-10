import { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import { globalStyles } from "../../styles/globalStyles";

export default function AddTransactions() {
    const initialForm = {
        description: "",
        value: 0,
        date: "",
        category: "Renda"
    }

    const [form, setForm] = useState(initialForm)

    const addTransaction = () => {
        Alert.alert(`${form.description} | ${form.value} | ${form.date} | ${form.category}`)
    }

    return (
        <SafeAreaView style={globalStyles.screenContainer}>
            <ScrollView style={globalStyles.content}>
                <View style={styles.form}>
                    <View>
                        <Text style={globalStyles.inputLabel}>Descrição</Text>
                        <TextInput style={globalStyles.input}  value={form.description} onChangeText={(text) => {setForm({...form, description: text})}}/>
                    </View>

                    <View>
                        <Text style={globalStyles.inputLabel}>Valor</Text>
                        <TextInput style={globalStyles.input} value={form.value} onChangeText={(v) => {setForm({...form, value: v})}} keyboardType="numeric"/>
                    </View>

                    <View>
                        <Text style={globalStyles.inputLabel}>Data</Text>
                        <TextInput style={globalStyles.input} value={form.date} onChangeText={(d) => {setForm({...form, date: d})}}/>
                    </View>

                    <View>
                        <Text style={globalStyles.inputLabel}>Categoria</Text>
                        <TextInput style={globalStyles.input} value={form.category} onChangeText={(c) => {setForm({...form, category: c})}}/>
                    </View>
                </View>

                <Button onPress={addTransaction} children={"Adicionar"} />
            </ScrollView>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
        form: {
            gap: 12,
            marginBottom: 40,
            marginTop: 10
        }
})