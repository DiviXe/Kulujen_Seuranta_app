import { Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect, Alert, useContext } from "react";
import CustomImageBackground from "../Components/ImageBackground";
import { useExpenses } from "../context/ExpenseContext";
import ExpenseList from "../Components/ExpenseList";
function GoBackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
      <Text>Back to screen</Text>
    </TouchableOpacity>
  );
}

export const NewExpenseScreen = () => {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const { addExpense } = useExpenses();

  const Alert = () =>
    Alert.alert("Expense added", "exampe", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const save = async () => {
    let id = Math.floor(Math.random() * 100000 + 1);
    const newExpense = {
      time: new Date(),
      description: description,
      amount: +amount,
      id: id,
    };
    console.log(newExpense);
    addExpense(newExpense);
  };

  const remove = async () => {
    try {
      await AsyncStorage.removeItem("amount");
      await AsyncStorage.removeItem("expense");
    } catch (err) {
      alert(err);
    } finally {
      setAmount("");
      setExpense("");
    }
  };

  return (
    <CustomImageBackground>
      <Text style={styles.AddMoneyTitle}>
        Write Amount and Description here.
      </Text>

      <TextInput
        style={styles.textInputBox}
        placeholder="enter description"
        placeholderTextColor="#fff"
        onChangeText={(description) => setDescription(description)}
        value={description}
        label="DESCRIPTION"
      />

      <TextInput
        style={styles.textInputBox}
        placeholder="enter expense"
        placeholderTextColor="#fff"
        onChangeText={(amount) => setAmount(amount)}
        value={amount}
        label="AMOUNT"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={() => save()}>
        <Text
          style={{
            fontWeight: "700",
          }}
        >
          ADD
        </Text>
      </TouchableOpacity>

      {/* <GoBackButton /> */}

      <ExpenseList />
    </CustomImageBackground>
  );
};
const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 3,
    borderRadius: 99,
    borderColor: "#fff",
    backgroundColor: "#F1CB0C",
    alignItems: "center",
    justifyContent: "center",
  },
  textInputBox: {
    backgroundColor: "#0005",
    padding: 10,
    borderRadius: 10,
    color: "#fff",
    marginVertical: 10,
  },

  AddMoneyTitle: {
    fontWeight: "700",
  },
});

export default NewExpenseScreen;
