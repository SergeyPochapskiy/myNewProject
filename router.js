import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import { RegistrationForm } from "./Screens/auth/RegistrationScreen";
import { LoginForm } from "./Screens/auth/LoginScreen";
import PostsScreen from "./Screens/mainScreen/PostsScreen";
import ProfileScreen from "./Screens/mainScreen/ProfileScreen";
import CreateScreen from "./Screens/mainScreen/CreatePostsScreen";

// icons import
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
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
        .
      </MainStack.Navigator>
    )
  }
  return (
      <MainTab.Navigator tabBarOptions={{ showLabel: false }}>
          <MainTab.Screen
            options={{
                tabBarIcon: ({ focused, sise, color }) => (
                    <MaterialCommunityIcons
                        name="postage-stamp"
                        size={24}
                        color={color}
                    />),
            }}
            name="Posts"
            component={PostsScreen} />
          <MainTab.Screen
            options={{
                tabBarIcon: ({ focused, sise, color }) => (
                    <AntDesign
                        name="pluscircleo"
                        size={24}
                        color={color} 
                    />),
            }}
            name="Create"
            component={CreateScreen} />
          <MainTab.Screen
            options={{
                tabBarIcon: ({ focused, sise, color }) => (
                    <AntDesign
                        name="profile"
                        size={24}
                        color={color}
                    />),
            }}
            name="Profile"
            component={ProfileScreen} />
      </MainTab.Navigator>
  )
}