import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [state, setState] = useState(initialState);

  const onSignUp = () => {
    console.log(state);
    setState(initialState);
  }; 

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.container}>
            <ImageBackground 
              style={styles.image}
              source={require("../assets/images/photo-bg.jpg")}>
              <Text style={styles.title}>Войти</Text>
              <View style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? 10 : 80
                }}
              >
                <TextInput
                  style={styles.input}
                  placeholder="Адрес электронной почты"
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.email}
                  onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, email: value }))
                    }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Пароль"
                  secureTextEntry={showPassword}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.password}
                  onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, password: value }))
                    }
                />
                <TouchableOpacity
                    onPressIn={() => setShowPassword(false)}
                    onPressOut={() => setShowPassword(true)}
                  >
                    <Text style={styles.btnShowPassword}>Показать</Text>
                  </TouchableOpacity>
              </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.btn}
                  onPress={onSignUp}
                >
                  <Text style={styles.btnTitle}>Войти</Text>
                </TouchableOpacity>
                <Text style={styles.textLogin}>Нет аккаунта? Зарегистрироваться</Text>
            </ImageBackground>
          </View>
        </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "flex-end",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: "#fff",
    // alignItems: "center",
  },
  image: {
      // flex: 1,
      // // resizeMode: "cover",
      // justifyContent: 'center',
      // // justifyContent: "flex-end",
    },
  form: {
    marginHorizontal: 16,
  },
  title: {
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    marginTop: 32,
    marginBottom: 33,
  },
  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    color: "#212121",
  },
  btnShowPassword: {
    position: "absolute",
    right: 16,
    top: -50,
    fontSize: 16,
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
  },
  btn: {
    backgroundColor: "#FF6C00",
    marginHorizontal: 16,
    borderRadius: 100,
    height: 51,
    marginTop: 27,
    marginBottom: 16,
    paddingTop: 16,
    paddingBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    fontFamily: "Roboto-Regular",
    color: "#FFFFFF",
    fontSize: 16,
  },
  textLogin: {
    fontFamily: "Roboto-Regular",
    marginBottom: 144,
    textAlign: "center",
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
  },
  
});