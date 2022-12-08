import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useExpenses } from "../context/ExpenseContext";

const ExpenseItem = ({ expenseItem }) => {
  const { deleteExpense } = useExpenses();
  return (
    <View style={styles.item}>
      <Text>{expenseItem.description}</Text>
      <Text>{expenseItem.amount}</Text>
      <TouchableOpacity
        style={styles.delete}
        onPress={() => deleteExpense(expenseItem.id)}
      >
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};
const ExpenseList = () => {
  const { allExpenses } = useExpenses();

  const renderItem = ({ item }) => <ExpenseItem expenseItem={item} />;

  return (
    <View style={styles.FlatlistContainer}>
      <FlatList
        data={allExpenses.sort((a, b) => a.time < b.time)}
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
