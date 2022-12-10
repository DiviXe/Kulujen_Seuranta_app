import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ExpenseContext = createContext(null);
export const ExpenseProvider = (props) => {
  const [selectedCardColor, setSelectedCardColor] = useState([]);
  const [balance, setBalance] = useState();
  const [allExpenses, setAllExpenses] = useState([]);
  let initialColor = ["#FAAD3D", "#EFC902"];
  //AsyncStorage.clear();
  console.log(allExpenses, "allExpenses");
  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    let cardColor = await AsyncStorage.getItem("@selectedCardColor");
    let expenses = await AsyncStorage.getItem("@allExpenses");
    let balance = await AsyncStorage.getItem("@balance");
    let color = await AsyncStorage.getItem("@initialColor");
    if (expenses != null) setAllExpenses(JSON.parse(expenses));
    if (balance != null) setBalance(JSON.parse(balance));
    if (cardColor == null) setSelectedCardColor(initialColor);
    if (cardColor != null) setSelectedCardColor(JSON.parse(cardColor));
    console.log(color);
  };

  // try catch block tekoon myöhemmin
  const addExpense = async (newExpense) => {
    let data = [...allExpenses, newExpense];
    setAllExpenses(data);
    await AsyncStorage.setItem("@allExpenses", JSON.stringify(data));
  };

  const deleteExpense = async (id) => {
    let filtered = allExpenses.filter((item) => item.id != id);
    setAllExpenses(filtered);
    await AsyncStorage.setItem("@allExpenses", JSON.stringify(filtered));
  };

  const addBalance = async (balance) => {
    setBalance(balance);
    await AsyncStorage.setItem("@balance", JSON.stringify(balance));
  };

  const changeCardColor = async (color) => {
    setSelectedCardColor(color);
    await AsyncStorage.setItem("@selectedCardColor", JSON.stringify(color));
  };
  console.log(selectedCardColor);
  //accumulator arrayn eka
  const sumOfAllExpenses = allExpenses.reduce(
    (total, item) => item.amount + total,
    0
  );

  console.log(sumOfAllExpenses);

  const totalBalance = balance - sumOfAllExpenses;

  return (
    <ExpenseContext.Provider
      value={{
        allExpenses,
        balance,
        addExpense,
        addBalance,
        deleteExpense,
        totalBalance,
        sumOfAllExpenses,
        changeCardColor,
        selectedCardColor,
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};
export const useExpenses = () => useContext(ExpenseContext);
export default ExpenseProvider;
