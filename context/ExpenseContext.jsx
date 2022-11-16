import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ExpenseContext = createContext();

export const ExpenseProvider = (props) => {
  const [amount, setAmount] = useState("");
  const [expense, setExpense] = useState("");
  const [balance, setBalance] = useState("");

  const save = async () => {
    try {
      await AsyncStorage.setItem("amount", amount);
      await AsyncStorage.setItem("expense", expense);
      await AsyncStorage.setItem("balance", balance);
    } catch (err) {
      alert(err);
    }
  };

  const load = async () => {
    try {
      let amount = await AsyncStorage.getItem("amount");
      let expense = await AsyncStorage.getItem("expense");
      let balance = await AsyncStorage.getItem("balance");
      if (amount !== null) {
        setAmount(amount);
        setExpense(expense);
        setBalance(balance);
        console.log(amount, expense, balance);
      }
    } catch (err) {
      alert(err);
    }
  };
  //remove is not final maybe it's not even needed id maybe required?
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
    <ExpenseContext.Provider value={{ amount, expense, balance }}>
      {props.children}
    </ExpenseContext.Provider>
  );
};
export const useExpenses = () => useContext(ExpenseContext);
export default ExpenseProvider;
