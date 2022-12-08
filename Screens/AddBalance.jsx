import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import CustomImageBackground from "../Components/ImageBackground";
import { useExpenses } from "../context/ExpenseContext";
export const AddBalance = () => {
  const [balance, setBalance] = useState("");
  const { addBalance, allExpenses } = useExpenses();

  const userAlert = () => Alert.alert("Balance has been updated", balance);

  const save = async () => {
    addBalance(balance);
    userAlert();
  };

  return (
    <CustomImageBackground>
      <Text style={styles.AddBalanceTitle}>enter your Balance here</Text>

      <TextInput
        style={styles.textInputBox}
        placeholder="enter balance"
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
