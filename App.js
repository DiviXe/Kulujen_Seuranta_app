import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./Screens/HomeScreen";
import AddMoney from "./Screens/AddMoney";
import Logger from "./Screens/AddMoney";
import Settings from "./Screens/Settings";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Etusivu"
          component={HomeScreen}
          options={{ title: "Home page" }}
          initialRouteName="HomeScreen"
        />
        <Stack.Screen
          name="AddMoney"
          component={AddMoney}
          options={{ title: "Add expense" }}
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
