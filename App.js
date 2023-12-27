import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ResetPassword from "./screens/ResetPassword";
import Dashboard from "./screens/Dashboard";
import Profile from "./screens/Profile";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./FirebaseConfig";
const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
const Stack = createNativeStackNavigator();
const InnerStack = createNativeStackNavigator();
const Innerlayout = () => {
  return (
    <InnerStack.Navigator
      initialRouteName="Login"
      screenOptions={{ animation: "fade", headerShown: false }}
    >
      <InnerStack.Screen name="Profile" component={Profile} />
      <InnerStack.Screen name="Dashboard" component={Dashboard} />
    </InnerStack.Navigator>
  );
};

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => setUser(user));
  }, []);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ animation: "fade", headerShown: false }}
        >
          {!user ? (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen name="Reset" component={ResetPassword} />
            </>
          ) : (
            <Stack.Screen name="InnerLayout" component={Innerlayout} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
