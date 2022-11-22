import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { ExpenseContext } from "../context/ExpenseContext";

const Card = () => {
  const { navigate } = useNavigation();
  const [totalBalance, setTotalBalance] = useState("");
  const [totalExpense, setTotalExp] = useState("");
  const { expense, balance } = useContext(ExpenseContext);

  useEffect(() => {
    let total = expense.reduce(
      (n, { amount }) => Number(n) + Number(amount),
      0
    );
    setTotalExp(total);
  }, [expense]);
  console.log(totalExpense);

  const sum = function () {
    setTotalBalance(Number(balance) - Number(totalExpense));
    console.log(totalBalance);
  };

  let recentExpense = expense.length > 0 ? expense[0] : false;
  return (
    <LinearGradient colors={["#FAAD3D", "#EFC90A"]} style={styles.box}>
      <View style={styles.boxTextAlign}>
        <Text style={styles.boxTextStyle}> Current balance</Text>
        <Text style={styles.Balance}>${totalBalance}</Text>

        <TouchableOpacity style={styles.BalanceButton} onPress={sum}>
          <Text style={{ fontSize: 6 }}>Update balance amount</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.BalanceButton}
          onPress={() => navigate("AddBalance")}
        >
          <Text style={{ fontSize: 9 }}>Add Balance</Text>
        </TouchableOpacity>

        <Text style={styles.CardNumbers}>1234 6546 3456 ****</Text>
      </View>
      <View style={styles.RightsideCardView}>
        <View>
          <TouchableOpacity
            style={styles.BalanceButton}
            onPress={() => navigate("AddExpense")}
          >
            <Text style={{ fontSize: 9 }}>Add expense</Text>
          </TouchableOpacity>
          {recentExpense && (
            <>
              <Text style={styles.ExpenseNameStyle}>
                {recentExpense.expense}
              </Text>
              <Text style={styles.ExpenseAmountStyle}>
                -{recentExpense.amount}
              </Text>
            </>
          )}
        </View>
        <Text style={styles.VisacardView}>VISA</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 25,
    paddingHorizontal: 15,
  },
  FlatlistContainer: {
    flex: 1,
    width: 350,
    paddingVertical: 5,
    borderColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  text: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 30,
  },
  box: {
    borderRadius: 15,
    flexDirection: "row",
    padding: 20,
  },
  boxTextAlign: {
    flex: 3,
    alignItems: "flex-start",
  },
  boxTextStyle: {
    fontSize: 15,
    fontWeight: "600",
  },

  BalanceButton: {
    marginTop: 2,
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: "#0004",
    backgroundColor: "#0004",
    alignItems: "center",
    justifyContent: "center",
  },

  Balance: {
    fontSize: 32,
    fontWeight: "bold",
  },
  CardNumbers: {
    fontSize: 15,
    marginTop: 30,
    fontWeight: "bold",
  },
  RightsideCardView: {
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  VisacardView: {
    fontSize: 18,
    color: "#1434CB",
    fontWeight: "700",
  },
  ExpenseNameStyle: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
    fontWeight: "700",
  },
  ExpenseAmountStyle: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 8,
    fontWeight: "700",
  },
});
export default Card;
