import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import BudgetEntry from "./src/screens/BudgetEntry";
import BudgetList from "./src/screens/BudgetList";
import { FontAwesome } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PaperProvider>
          <Stack.Navigator initialRouteName="BudgetEntry">
            <Stack.Screen
              name="BudgetEntry"
              component={BudgetEntry}
              options={{
                title: "Budget Entry",
                headerLeft: () => (
                  <FontAwesome
                    style={{ margin: 60, color: "#8020f0" }}
                    size={28}
                    color="black"
                  />
                ),
              }}
            />
            <Stack.Screen
              name="BudgetList"
              component={BudgetList}
              options={{
                title: "Budget Entry List",
                headerLeft: () => (
                  <FontAwesome
                    style={{ margin: 50, color: "#8020f0" }}
                    size={28}
                    color="black"
                  />
                ),
              }}
            />
          </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
    </Provider>
  );
}
