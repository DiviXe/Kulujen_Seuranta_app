import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import NewExpenseScreen from "./Screens/NewExpenseScreen";
import Logger from "./Screens/Logger";
import Settings from "./Screens/Settings";
import ExpenseProvider from "./context/ExpenseContext";
import AddBalance from "./Screens/AddBalance";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <ExpenseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Etusivu"
            component={HomeScreen}
            options={{ title: "Home page for your expenses" }}
            initialRouteName="HomeScreen"
          />
          <Stack.Screen
            name="NewExpenseScreen"
            component={NewExpenseScreen}
            options={{ title: "Add expense" }}
          />
          <Stack.Screen
            name="Logger"
            component={Logger}
            options={{ title: "Your all time expenses" }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{ title: "Settings" }}
          />
          <Stack.Screen
            name="AddBalance"
            component={AddBalance}
            options={{ title: "Add balance to account" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ExpenseProvider>
  );
}
