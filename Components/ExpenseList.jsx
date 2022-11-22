import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseList = () => {
  const { expense } = useContext(ExpenseContext);
  const ItemList = ({ title, amount, time }) => {
    const { DeleteExpense } = useContext(ExpenseContext);
    return (
      <View style={styles.item}>
        <Text>{title}</Text>
        <Text>{amount}</Text>
        <TouchableOpacity
          style={styles.delete}
          onPress={() => DeleteExpense(time)}
        >
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({ item, index }) => (
    <ItemList time={item.time} title={item.expense} amount={item.amount} />
  );

  return (
    <View style={styles.FlatlistContainer}>
      <FlatList
        data={expense}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  FlatlistContainer: {
    flex: 1,
    alignSelf: "stretch",
    borderColor: "#fff",
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0002",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,
    // borderWidth: 1,
    borderRadius: 8,
    borderColor: "#0002",
  },
  delete: {
    backgroundColor: "red",
    padding: 4,
    margin: 4,
    borderRadius: 99,
  },
  deleteText: {
    color: "#fff",
    paddingHorizontal: 8,
  },
});
export default ExpenseList;
