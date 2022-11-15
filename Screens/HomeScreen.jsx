import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Card from "../Components/card";
import CustomImageBackground from "../Components/ImageBackground";
import { useExpenses } from "../context/ExpenseContext";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Expense 1",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Expense 2",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Expense 3",
  },
  {
    id: "58694a0f-3da1-471f-bd75-145571e29d72",
    title: "Expense 4",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text>{title}</Text>
  </View>
);

export const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => <Item title={item.title} />;
  //const { amount, expense } = useContext(useExpenses);
  //console.log(values); undefined
  return (
    <CustomImageBackground>
      <Text style={styles.WalletTitle}>Welcome to W&llet!</Text>
      <Card />
      <View style={styles.FlatlistContainer}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </CustomImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  WalletTitle: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
    alignItems: "center",
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
    color: "#fff",
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
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue",
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16,
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
});
export default HomeScreen;
