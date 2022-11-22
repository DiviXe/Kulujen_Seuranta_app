import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Card from "../Components/card";
import CustomImageBackground from "../Components/ImageBackground";
import { useNavigation } from "@react-navigation/native";
import ExpenseList from "../Components/ExpenseList";
export const HomeScreen = ({ navigation }) => {
  const { navigate } = useNavigation();
  return (
    <CustomImageBackground>
      <Text style={styles.WalletTitle}>Welcome to W&llet!</Text>
      <Card />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigate("Logger")}
        >
          <Text>Total Expenses </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigate("Settings")}
        >
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>
      <ExpenseList />
    </CustomImageBackground>
  );
};
const styles = StyleSheet.create({
  WalletTitle: {
    fontSize: 24,
    marginBottom: 10,
    color: "#0008",
    fontWeight: "bold",
    alignItems: "center",
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
  button2: {
    borderRadius: 2,
    backgroundColor: "gray",
    borderWidth: 2,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    paddingHorizontal: 16,
    margin: 10,
    marginVertical: 20,
    borderRadius: 20,
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
export default HomeScreen;
