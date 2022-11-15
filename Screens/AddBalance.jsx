import { Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect, Alert } from "react";
import CustomImageBackground from "../Components/ImageBackground";

export const AddBalance = () => {
  const [balance, setBalance] = useState("");

  const Alert = () =>
    Alert.alert("Balance has been updated", "exampe", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const save = async () => {
    try {
      await AsyncStorage.setItem("balance", balance);
    } catch (err) {
      alert(err);
    }
  };

  const load = async () => {
    try {
      let balance = await AsyncStorage.getItem("balance");
      if (balance !== null) {
        setBalance(balance);
        console.log(balance);
      }
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <CustomImageBackground>
      <Text style={styles.AddBalanceTitle}>Write Amount Balance here</Text>

      <TextInput
        style={styles.textInputBox}
        placeholder="Write your balance"
        placeholderTextColor="#fff"
        onChangeText={(balance) => setBalance(balance)}
        value={balance}
        label="BALANCE"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={() => save()}>
        <Text
          style={{
            marginTop: 5,
            fontSize: 12,
            fontWeight: "700",
          }}
        >
          Save balance
        </Text>
      </TouchableOpacity>

      <Text style={{ color: "#fff" }}>{balance} </Text>
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

  AddMoneyBalance: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
});

export default AddBalance;
