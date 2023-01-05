import { StyleSheet, View, ImageBackground } from "react-native";
import { RegistrationForm } from "./Screens/RegistrationScreen";
// import { LoginForm } from "./Screens/LoginScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/images/photo-bg.jpg")}
      >
        <RegistrationForm/>
        {/* <LoginForm/> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: 'center',
    justifyContent: "flex-end",
  },
});

