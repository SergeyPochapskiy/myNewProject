import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from "react";
// import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RegistrationForm } from "./Screens/auth/RegistrationScreen";
import { LoginForm } from "./Screens/auth/LoginScreen";
import PostsScreen from "./Screens/mainScreen/PostsScreen";
import ProfileScreen from "./Screens/mainScreen/ProfileScreen";
import CreateScreen from "./Screens/mainScreen/CreateScreen";




const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const useRoute = (isAuth) => {
  if (!isAuth) {
    return
      <MainStack.Navigator >
        <MainStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginForm} />
        <MainStack.Screen
          options={{
            headerShown: false,
          }}
          name="Register"
          component={RegistrationForm} />
      </MainStack.Navigator>
  }
  return
      <MainTab.Navigator>
        <MainTab.Screen name="Posts" component={PostsScreen} />
        <MainTab.Screen name="Create" component={CreateScreen} />
        <MainTab.Screen name="Profile" component={ProfileScreen}/>
      </MainTab.Navigator>

}

export default function App() {
  const routing = useRoute({})

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync()
    }
    prepare();
  }, [])

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();

  }

  return (
    <NavigationContainer>
      {routing}
    </NavigationContainer>

  );
}





// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },

//   // image: {
//   //   flex: 1,
//   //   resizeMode: "cover",
//   //   // justifyContent: 'center',
//   //   justifyContent: "flex-end",
//   // },
// });