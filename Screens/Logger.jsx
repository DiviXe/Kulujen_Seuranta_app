import { Text, StyleSheet, FlatList, View } from "react-native";
import CustomImageBackground from "../Components/ImageBackground";
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

export const Logger = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <CustomImageBackground>
      <Text style={styles.LoggerTitle}>Your monthly expenses total:</Text>
      <Text style={styles.LoggerTitle}>(insert graph here)</Text>

      <View style={styles.FlatlistContainer}>
        <FlatList
          //data={useExpenses}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </CustomImageBackground>
  );
};
const styles = StyleSheet.create({
  LoggerTitle: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "700",
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
  FlatlistContainer: {
    flex: 1,
    width: 400,
    paddingVertical: 5,
    borderColor: "#fff",
    paddingHorizontal: 20,
  },
});

export default Logger;
