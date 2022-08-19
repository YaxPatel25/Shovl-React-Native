import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomNavigator } from "./src/navigator/bottomNavigator";

//Screens
import LoginScreen from "./src/screens/Login";
import SignUpScreen from "./src/screens/SignUP";
import AddListing from "./src/screens/AddListing";
import Onboarding_1 from "./src/screens/Onboarding_1";
import Onboarding_2 from "./src/screens/Onboarding_2";
import Onboarding_3 from "./src/screens/Onboarding_3";
import BidPricing from "./src/screens/BidPricing";
import AdvertiseDetails from "./src/screens/AdvertiseDetails";
import Payment from "./src/screens/Payment";
import ConfirmShovelerScreen from "./src/screens/ConfirmShoveler";
import HomeScreen from './src/screens/Home';
import AppStateProvider from './src/context/AppState';

const MainStack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <AppStateProvider>
        <MainStack.Navigator initialRouteName="onboarding_1" screenOptions={{ headerShown: false }}>
          <MainStack.Screen name="login" component={LoginScreen} />
          <MainStack.Screen name="signUp" component={SignUpScreen} />
          <MainStack.Screen name="bottomNav" component={BottomNavigator} />
          <MainStack.Screen name="AddListing" component={AddListing} />
          <MainStack.Screen name="onboarding_1" component={Onboarding_1} />
          <MainStack.Screen name="onboarding_2" component={Onboarding_2} />
          <MainStack.Screen name="onboarding_3" component={Onboarding_3} />
          <MainStack.Screen name="AdvertiseDetails" component={AdvertiseDetails} />
          <MainStack.Screen name="ConfirmShovelerScreen" component={ConfirmShovelerScreen} />
          <MainStack.Screen name="BidPricing" component={BidPricing} />
          <MainStack.Screen name="Payment" component={Payment} />
          <MainStack.Screen name="Home" component={HomeScreen} />
        </MainStack.Navigator>
      </AppStateProvider>
    </NavigationContainer>
  );
}
