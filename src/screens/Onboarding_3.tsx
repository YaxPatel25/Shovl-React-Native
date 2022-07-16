import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

import AntIcon from 'react-native-vector-icons/AntDesign';
import Encypto from 'react-native-vector-icons/Entypo';

export default function Onboarding_3({ navigation }: {navigation: any}) {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={require("../../assets/images/snow.png")} />
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "#126FB2" }}>Clear the Snow </Text>
      <Text style={styles.smallText}>Add post of the location or property where you want snow to be cleared without any hassle</Text>

      <View style={styles.bottomArrows}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            navigation.navigate('onboarding_1');
          }}>
          <AntIcon name="arrowleft" size={32} color="#4A57A3" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle}>
          <Encypto name="dots-three-horizontal" size={32} color="#4A57A3" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            navigation.navigate('onboarding_2');
          }}>
          <AntIcon name="arrowright" size={32} color="#4A57A3" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8F4FD",
    flexDirection: "column",
  },
  image: {
    marginBottom:30
  },

  font: {
    color: "#126FB2",
    fontWeight: "bold",
    fontSize: 38,
  },
  buttonStyle: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  smallText: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
    textAlign: "center",
    fontSize: 16,
    color: "#126FB2",
  },
  bottomArrows: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    marginBottom: 50,
  },
});
