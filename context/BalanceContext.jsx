//NOT NEEDED
import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BalanceContext = createContext();
export const BalanceProvider = (props) => {
  const [balance, setBalance] = useState("");

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
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <BalanceContext.Provider value={{ balance }}>
      {props.children}
    </BalanceContext.Provider>
  );
};
export const useBalance = () => useContext(BalanceContext);
export default BalanceProvider;
