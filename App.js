import React, { useCallback } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
// import { RegistrationForm } from "./Screens/RegistrationScreen";
import { LoginForm } from "./Screens/LoginScreen";

import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
        {/* <RegistrationForm/> */}
        <LoginForm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
  },

  // image: {
  //   flex: 1,
  //   resizeMode: "cover",
  //   // justifyContent: 'center',
  //   justifyContent: "flex-end",
  // },
});