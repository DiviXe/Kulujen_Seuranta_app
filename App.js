import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import AddMoney from "./Screens/AddMoney";
import Logger from "./Screens/Logger";
import Settings from "./Screens/Settings";
import ExpenseProvider from "./context/ExpenseContext";
import AddBalance from "./Screens/AddBalance";
//const { amount, expense } = useExpenses();
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <ExpenseProvider>
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
            options={{ title: "Your monthly expenses" }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{ title: "Settings possibly" }}
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
