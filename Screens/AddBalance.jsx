import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import React, { useState, useContext } from "react";
import CustomImageBackground from "../Components/ImageBackground";
import { ExpenseContext } from "../context/ExpenseContext";
import ExpenseList from "../Components/ExpenseList";

export const AddBalance = () => {
  const [balance, setBalance] = useState("");
  const { AddBalance } = useContext(ExpenseContext);

  const UserAlert = () => Alert.alert("Balance has been updated", balance);

  const save = async () => {
    AddBalance(balance);
    UserAlert();
  };

  return (
    <CustomImageBackground>
      <Text style={styles.AddBalanceTitle}>Write Amount Balance here</Text>

      <TextInput
        style={styles.textInputBox}
        placeholder="Write your balance"
        onChangeText={(balance) => setBalance(balance)}
        value={balance}
        label="BALANCE"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={() => save()}>
        <Text
          style={{
            fontWeight: "700",
          }}
        >
          Save Balance
        </Text>
      </TouchableOpacity>
    </CustomImageBackground>
  );
};
const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginVertical: 20,
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

  AddBalanceTitle: {
    fontWeight: "700",
  },
});

export default AddBalance;
