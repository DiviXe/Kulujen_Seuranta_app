import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect, Alert } from "react";
import CustomImageBackground from "../Components/ImageBackground";
function GoBackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
      <Text>Back to screen :)</Text>
    </TouchableOpacity>
  );
}

export const AddMoney = () => {
  const [amount, setAmount] = useState("");
  const [expense, setExpense] = useState("");

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
    try {
      await AsyncStorage.setItem("amount", amount);
      await AsyncStorage.setItem("expense", expense);
    } catch (err) {
      alert(err);
    }
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
        placeholder="Write amount here"
        placeholderTextColor="#fff"
        onChangeText={(amount) => setAmount(amount)}
        value={amount}
        label="AMOUNT"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.textInputBox}
        placeholder="Write Expense here"
        placeholderTextColor="#fff"
        onChangeText={(expense) => setExpense(expense)}
        value={expense}
        label="EXPENSE"
      />
      <TouchableOpacity style={styles.button} onPress={() => save()}>
        <Text
          style={{
            marginTop: 5,
            fontSize: 12,
            fontWeight: "700",
          }}
        >
          Save the data
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => remove()}>
        <Text
          style={{
            marginTop: 5,
            fontSize: 12,
            fontWeight: "700",
          }}
        >
          remove the data
        </Text>
      </TouchableOpacity>
      <GoBackButton />
      <Text style={{ color: "#fff" }}>{amount} </Text>
      <Text style={{ color: "#fff" }}>{expense} </Text>
    </CustomImageBackground>
  );
};
const styles = StyleSheet.create({
  button: {
    padding: 5,
    marginTop: 5,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "#fff",
    backgroundColor: "#F1CB0C",
    alignItems: "center",
    justifyContent: "center",
  },
  textInputBox: {
    borderWidth: 3,
    borderColor: "gray",
    width: 200,
    margin: 5,
    color: "#fff",
  },

  AddMoneyTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
});

export default AddMoney;
