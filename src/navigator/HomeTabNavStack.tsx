import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AdvertiseDetails from '../screens/AdvertiseDetails';
import BidPricing from '../screens/BidPricing';
import HomeScreen from '../screens/Home';

const NavStack = createNativeStackNavigator();

function HomeTabNavStack() {
  return (
    <NavStack.Navigator initialRouteName="Landing">
      <NavStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Posts',
        }}
      />
      <NavStack.Screen
        name="AdvertiseDetails"
        component={AdvertiseDetails}
        options={{
          title: 'Post Details',
        }}
      />
      <NavStack.Screen
        name="BidPricing"
        component={BidPricing}
        options={{
          title: 'Students List',
        }}
      />
    </NavStack.Navigator>
  );
};

export default HomeTabNavStack;
