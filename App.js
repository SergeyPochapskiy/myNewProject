import React, { useEffect, useCallback } from "react";
import {} from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

import { NavigationContainer } from "@react-navigation/native";

import { useRoute } from "./router";


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

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

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