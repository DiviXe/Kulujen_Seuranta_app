import { Text, StyleSheet } from "react-native";
import ExpenseList from "../Components/ExpenseList";
import CustomImageBackground from "../Components/ImageBackground";
import { useExpenses } from "../context/ExpenseContext";

export const Logger = () => {
  const { sumOfAllExpenses } = useExpenses();

  console.log(sumOfAllExpenses);

  return (
    <CustomImageBackground>
      <Text style={styles.LoggerTitle}>
        Monthly Expenses Total: €{sumOfAllExpenses}
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
