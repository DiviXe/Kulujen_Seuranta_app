import {View, Text, TouchableOpacity,  StyleSheet, TextInput, ImageBackground} from 'react-native';
const background = { uri: 'https://i.imgur.com/qle194G.jpeg' };
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, Alert} from "react";
function GoBackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}
    >
            <Text>Back to screen :)</Text>
            </TouchableOpacity>
  );
}

export const AddMoney = () => {
const [amount, setAmount] = useState("");
const [expense, setExpense] = useState("");

const Alert = () =>
    Alert.alert('Expense added', 'exampe', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

const save = async() =>{
  try {
      await AsyncStorage.setItem("amount", amount)
      await AsyncStorage.setItem("expense", expense)

  } catch (err) {
      alert(err);
  }

};

const load = async () => {
  try{
      let amount = await AsyncStorage.getItem("amount")
      let expense = await AsyncStorage.getItem("expense")
      if (amount !== null) {
        setAmount(amount);
        setExpense(expense);
      }
  }catch (err) {
    alert(err);
  }
};

const remove = async () => {
  try {
      await AsyncStorage.removeItem("amount")
      await AsyncStorage.removeItem("expense")
      
  } catch (err) {
    alert(err)
  } finally {
    setAmount("");
    setExpense("");
  }
};

useEffect(() => {
  load();
}, []);

  return (
    <View style={styles.container}> 
    <ImageBackground source={background} resizeMode="cover" style={{ flex:1, width:'100%', justifyContent: 'top', alignItems: 'center'}}>
    
      <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700', }}>Write Amount and expense here.</Text>
      
      <TextInput style={styles.textInput}
        placeholder="Write amount here"
        placeholderTextColor="#fff"
        onChangeText={(amount) => setAmount(amount)}
        value={amount}
        label="AMOUNT"
        keyboardType="numeric"
      />
      <TextInput style={styles.textInput}
        placeholder="Write Expense here"
        placeholderTextColor="#fff"
        onChangeText={(expense) => setExpense(expense)}
        value={expense}
        label="EXPENSE"
      />
      <TouchableOpacity style={styles.button} onPress={() => save()}>
      <Text style={{ marginTop: 5, color: '#fff', fontSize: 12, fontWeight: '700', }}>Save the data</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => remove()}>
      <Text style={{ marginTop: 5, color: '#fff', fontSize: 12, fontWeight: '700', }}>remove the data</Text>
      </TouchableOpacity>
      <GoBackButton/>
      <Text style={{heigth: 40}}>{amount} </Text>
      <Text style={{heigth: 40}}>{expense} </Text>
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  button: {
    padding: 5,
    marginTop: 5,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: '#fff',
    backgroundColor: '#F1CB0C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 3,
    borderColor: "gray",
    width: 200,
    margin: 5,
  },
});

export default AddMoney;

