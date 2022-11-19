import { useContext, useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import ExpenseList from "../Components/ExpenseList";
import CustomImageBackground from "../Components/ImageBackground";
import { ExpenseContext } from "../context/ExpenseContext";

export const Logger = () => {
  const [totalExp, setTotalExp] = useState("");
  const { expense } = useContext(ExpenseContext);
  useEffect(() => {
    let total = expense.reduce(
      (n, { amount }) => Number(n) + Number(amount),
      0
    );
    setTotalExp(total);
  }, [expense]);

  return (
    <CustomImageBackground>
      <Text style={styles.LoggerTitle}>
        Monthly Expenses Total: ${totalExp}
      </Text>
      <ExpenseList />
    </CustomImageBackground>
  );
};

const styles = StyleSheet.create({
  LoggerTitle: {
    color: "#0009",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 20,
  },
});

export default Logger;
