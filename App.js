import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//redux latency
//import { Provider } from "react-redux";
//import store from "./store";

// komponentit
import Etusivu from "./Components/Etusivu";
import Finance from "./Components/Finance";
import Logger from "./Components/Finance";
import Settings from "./Components/Settings";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    //<Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Etusivu"
          component={Etusivu}
          options={{ title: "Finance Tracker" }}
        />
        <Stack.Screen
          name="Finance"
          component={Finance}
          options={{ title: "Expense status" }}
        />
        <Stack.Screen
          name="Logger"
          component={Logger}
          options={{ title: "Logging data" }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ title: "Settings possibly" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    //</Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
