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
  // Keyboard,
  // Dimensions,
} from "react-native";

import { AntDesign } from '@expo/vector-icons';


export const RegistrationForm = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  return (
    <TouchableWithoutFeedback>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.container}>
            <View style={styles.photo}>
              <AntDesign
                name="pluscircleo"
                size={25}
                color="#FF6C00"
                style={styles.avatarIcon}
              />
            </View>
            <Text style={styles.title}>Регистрация</Text>
            <View style={{
              ...styles.form,
              marginBottom: isShowKeyboard ? 20 : 100
              }}
            >
              <TextInput
                style={styles.input}
                placeholder="Логин"
                onFocus={() => setIsShowKeyboard(true)}
              />
              <TextInput
                style={styles.input}
                placeholder="Адрес электронной почты"
                onFocus={() => setIsShowKeyboard(true)}
              />
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                secureTextEntry={true}
                onFocus={() => setIsShowKeyboard(true)}
              />
            </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
              >
                <Text style={styles.btnTitle}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <Text style={styles.textLogin}>Уже есть аккаунт? Войти</Text>
            
          </View>
        </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "flex-end",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: "#fff",
    // alignItems: "center",
  },
  photo: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderColor: "#F6F6F6",
    borderRadius: 16,
    position: "absolute",
    left: "47%",
    transform: [{ translateX: -50 }, { translateY: -60 }],
  },
  avatarIcon: {
    position: "absolute",
    top: 81,
    left: 107,
  },
  form: {
    justifyContent: "center",
    marginHorizontal: 16,
  },
  input: {
    // fontFamily: "Roboto-Regular",
    fontSize: 16,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    // marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    color: "#212121",
  },
  title: {
    color: "#212121",
    // fontFamily: "Roboto",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    marginTop: 92,
    marginBottom: 33,
    
    
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
    // fontFamily: 'Roboto',
    color: "#FFFFFF",
    fontSize: 18,
  },
  textLogin: {
    marginBottom: 78,
    textAlign: "center",
    color: "#1B4371",
    // fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,

  },
  
});



