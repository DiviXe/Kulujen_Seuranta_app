import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useExpenses } from "../context/ExpenseContext";

const Card = () => {
  const { navigate } = useNavigation();
  const { totalBalance, allExpenses, selectedCardColor } = useExpenses();
  console.log(selectedCardColor);

  let recentExpense = allExpenses.length > 0 ? allExpenses[0] : false;

  return (
    <LinearGradient colors={selectedCardColor} style={styles.box}>
      <View style={styles.boxTextAlign}>
        <Text style={styles.boxTextStyle}> Current balance</Text>
        <Text style={styles.Balance}>€{totalBalance}</Text>

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
            onPress={() => navigate("NewExpenseScreen")}
          >
            <Text style={{ fontSize: 9 }}>Add expense</Text>
          </TouchableOpacity>
          {recentExpense && (
            <>
              <Text style={styles.ExpenseNameStyle}>
                {recentExpense.description}
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
