import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


// Fonts
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";

// Pages
import HomeScreen from "../screens/Home";
import ConfirmShovelerScreen from "../screens/ConfirmShoveler";
import AddListing from "../screens/AddListing";
import ProfileScreen from "../screens/Profile";
import HomeTabNavStack from "./HomeTabNavStack";


const Tab = createBottomTabNavigator();

export const BottomNavigator = ({ route }: {route: any}) => {
  //const username = route.params.username;
  //console.log("user name is ", username);
  return (
    <Tab.Navigator
  initialRouteName={"home"}
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#126FB2",
         
        },
        headerTitleStyle: {
          color: "white",
          fontSize: 22,
        },
        tabBarStyle: { backgroundColor: "#126FB2", },
        tabBarActiveTintColor: "white",
      }}
    >
      <Tab.Screen name="home" component={HomeTabNavStack}
       options={{ headerShown: false, title: "Homescreen", tabBarIcon: () => <FontAwesome name="list" size={24} color="white" /> }} />
      
      <Tab.Screen name="calendar" component={AddListing}
       options={{ headerShown: false,title: "Add Listing", tabBarIcon: () => <FontAwesome name="plus" size={24} color="white" /> }} />

      <Tab.Screen name="listView" component={ConfirmShovelerScreen}
       options={{ headerShown: false, title: "Confirm", tabBarIcon: () => <FontAwesome name="check" size={24} color="white" /> }} />
      
      <Tab.Screen name="logout" component={ProfileScreen} 
      options={{ headerShown: false, title: "Profile", tabBarIcon: () => <Entypo name="user" size={24} color="white" /> }} />
    </Tab.Navigator>
  );
};
