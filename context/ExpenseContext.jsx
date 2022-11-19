import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ExpenseContext = createContext(null);

export const ExpenseProvider = (props) => {
  const [amount, setAmount] = useState();
  const [balance, setBalance] = useState();
  const [expense, setExpense] = useState([]);

  console.log(expense, "expense");

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    let _amount = await AsyncStorage.getItem("@amount");
    let _expense = await AsyncStorage.getItem("@expense");
    let _balance = await AsyncStorage.getItem("@balance");

    if (_amount != null) setAmount(JSON.parse(_amount));
    if (_expense != null) setExpense(JSON.parse(_expense));
    if (_balance != null) setBalance(JSON.parse(_balance));
  };

  const AddExpense = async (_expense) => {
    let data = [_expense, ...expense];
    setExpense(data);
    await AsyncStorage.setItem("@expense", JSON.stringify(data));
  };

  const DeleteExpense = async (id) => {
    let filtered = expense.filter((item) => item.time != id);
    setExpense(filtered);
    await AsyncStorage.setItem("@expense", JSON.stringify(filtered));
  };

  const AddBalance = async (balance) => {
    setBalance(balance);
    await AsyncStorage.setItem("@balance", JSON.stringify(balance));
  };

  const AddAmount = async (amount) => {
    setAmount(amount);
    await AsyncStorage.setItem("@amount", JSON.stringify(amount));
  };

  return (
    <ExpenseContext.Provider
      value={{
        amount,
        expense,
        balance,
        AddExpense,
        AddAmount,
        AddBalance,
        DeleteExpense,
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};
export default ExpenseProvider;
