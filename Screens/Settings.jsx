import { Alert } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomImageBackground from "../Components/ImageBackground";
import { useExpenses } from "../context/ExpenseContext";
export const Settings = () => {
  const { changeCardColor } = useExpenses();
  const userAlert = () => Alert.alert("Your card's color has been updated");

  return (
    <CustomImageBackground>
      <Text style={styles.Title}>Change card color</Text>

      <TouchableOpacity
        style={styles.buttonOriginal}
        onPress={() => changeCardColor(["#FAAD3D", "#EFC902"])}
      >
        <Text>Change card color back to original color </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => changeCardColor(["#e7e6fa", "#ff00e8"])}
      >
        <Text>Change card color (Purple) </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button2}
        onPress={() => changeCardColor(["#e7e6fa", "#ab2026"])}
      >
        <Text>Change card color (Red)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button3}
        onPress={() => changeCardColor(["#e7e6fa", "#8ae880"])}
      >
        <Text>Change card color (Green)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button4}
        onPress={() => changeCardColor(["#e7e6fa", "#5353e0"])}
      >
        <Text>Change card color (Blue)</Text>
      </TouchableOpacity>
    </CustomImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  Title: {
    fontSize: 15,
    color: "#0008",
    fontWeight: "bold",
    alignItems: "center",
  },

  buttonOriginal: {
    borderRadius: 2,
    backgroundColor: "yellow",
    borderWidth: 2,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    margin: 5,
    marginVertical: 10,
    borderRadius: 30,
  },

  button: {
    borderRadius: 2,
    backgroundColor: "purple",
    borderWidth: 2,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    margin: 5,
    marginVertical: 20,
    borderRadius: 30,
  },
  button2: {
    borderRadius: 2,
    backgroundColor: "red",
    borderWidth: 2,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    margin: 5,
    marginVertical: 20,
    borderRadius: 30,
  },
  button3: {
    borderRadius: 2,
    backgroundColor: "green",
    borderWidth: 2,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    margin: 5,
    marginVertical: 20,
    borderRadius: 30,
  },
  button4: {
    borderRadius: 2,
    backgroundColor: "blue",
    borderWidth: 2,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    margin: 5,
    marginVertical: 20,
    borderRadius: 30,
  },
});

export default Settings;
