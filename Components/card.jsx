import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const Card = () => {
  const { navigate } = useNavigation();

  return (
    <LinearGradient
      colors={["#FAAD3D", "#EFC90A", "#F1CB0C", "#7E7E7E", "#080808"]}
      style={styles.box}
    >
      <View style={styles.boxTextAlign}>
        <Text style={styles.boxTextStyle}> Current balance</Text>
        <Text style={styles.Balance}>$6000,00</Text>

        <TouchableOpacity
          style={styles.BalanceButton}
          onPress={() => navigate("AddBalance")}
        >
          <Text>Add Balance</Text>
        </TouchableOpacity>

        <Text style={styles.CardNumbers}>1234 6546 3456 ****</Text>
      </View>
      <View style={styles.RightsideCardView}>
        <Text style={styles.VisacardView}>VISA</Text>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate("AddMoney")}
          >
            <Text style={{ fontSize: 9 }}>Add expense</Text>
          </TouchableOpacity>
          <Text style={styles.ExpenseNameStyle}>Expense</Text>
          <Text style={styles.ExpenseAmountStyle}>-Expense</Text>
        </View>
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
    width: "80%",
    borderRadius: 15,
    flexDirection: "row",
    padding: 22,
    flex: 1,
  },
  boxTextAlign: {
    width: "70%",
    alignItems: "flex-start",
  },
  boxTextStyle: {
    fontSize: 15,
    fontWeight: "600",
  },

  button: {
    padding: 5,
    marginTop: 25,
    borderWidth: 3,
    borderRadius: 25,
    borderColor: "#fff",
    backgroundColor: "#F1CB0C",
    alignItems: "center",
    justifyContent: "center",
  },
  BalanceButton: {
    padding: 5,
    borderWidth: 3,
    borderRadius: 25,
    borderColor: "#fff",
    backgroundColor: "#F1CB0C",
    alignItems: "center",
    justifyContent: "center",
  },

  item: {
    width: "70%",
    backgroundColor: "#ffc600",
    padding: 2,
    marginVertical: 5,
    marginHorizontal: 10,
    borderWidth: 3,
    borderRadius: 25,
    borderColor: "#fff",
  },
  title: {
    fontSize: 20,
  },
  Balance: {
    fontSize: 32,
    fontWeight: "bold",
  },
  CardNumbers: {
    fontSize: 15,
    marginTop: 50,
    fontWeight: "bold",
  },
  RightsideCardView: {
    alignItems: "flex-end",
    width: "30%",
  },
  VisacardView: {
    fontSize: 18,
    color: "#1434CB",
    fontWeight: "700",
  },
  ExpenseNameStyle: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "700",
  },
  ExpenseAmountStyle: {
    marginTop: 5,
    fontSize: 8,
    fontWeight: "700",
  },
});
export default Card;
