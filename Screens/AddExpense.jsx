import { Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect, Alert, useContext } from "react";
import CustomImageBackground from "../Components/ImageBackground";
import { ExpenseContext } from "../context/ExpenseContext";
import ExpenseList from "../Components/ExpenseList";
function GoBackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
      <Text>Back to screen</Text>
    </TouchableOpacity>
  );
}

export const AddExpense = () => {
  const [amount, setAmount] = useState("");
  const [expense, setExpense] = useState("");
  const { AddExpense } = useContext(ExpenseContext);

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
    let time = Date.now();
    AddExpense({ time, amount, expense });
  };

  const load = async () => {
    try {
      let amount = await AsyncStorage.getItem("amount");
      let expense = await AsyncStorage.getItem("expense");
      if (amount !== null) {
        setAmount(amount);
        setExpense(expense);
      }
    } catch (err) {
      alert(err);
    }
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

  useEffect(() => {
    load();
  }, []);

  return (
    <CustomImageBackground>
      <Text style={styles.AddMoneyTitle}>
        Write Amount and Description here.
      </Text>

      <TextInput
        style={styles.textInputBox}
        placeholder="Write Amount here"
        onChangeText={(amount) => setAmount(amount)}
        value={amount}
        label="AMOUNT"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.textInputBox}
        placeholder="Write Expense here"
        onChangeText={(expense) => setExpense(expense)}
        value={expense}
        label="EXPENSE"
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
    backgroundColor: "#0002",
    padding: 10,
    borderRadius: 10,
    color: "#fff",
    marginVertical: 10,
  },

  AddMoneyTitle: {
    fontWeight: "700",
  },
});

export default AddExpense;
