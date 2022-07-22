import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AdvertiseDetails from '../screens/AdvertiseDetails';
import BidPricing from '../screens/BidPricing';
import ConfirmShovelerScreen from '../screens/ConfirmShoveler';
import HomeScreen from '../screens/Home';
import Payment from '../screens/Payment';

const NavStack = createNativeStackNavigator();

function HomeTabNavStack() {
  return (
    <NavStack.Navigator initialRouteName="Landing">
      <NavStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Jobs',
        }}
      />
      <NavStack.Screen
        name="AdvertiseDetails"
        component={AdvertiseDetails}
        options={{
          title: 'Job Details',
        }}
      />
      <NavStack.Screen
        name="BidPricing"
        component={BidPricing}
        options={{
          title: 'Bid Pricing',
        }}
      />
      <NavStack.Screen
        name="PaymentProcess"
        component={Payment}
        options={{
          title: 'Payments',
        }}
      />
        <NavStack.Screen
        name="ConfirmShovler"
        component={ConfirmShovelerScreen}
        options={{
          title: 'Confirm Shovler',
        }}
      />
    </NavStack.Navigator>
  );
};

export default HomeTabNavStack;
