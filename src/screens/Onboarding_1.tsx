import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";


export default function Onboarding_1({ navigation }: {navigation: any}) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.font}>Welcome</Text>
      <Text style={styles.font}>to</Text>
      <Image style={styles.img} source={require("../../assets/images/shovlLogo_s.png")} />
       
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("onboarding_3");
          }}
        >
          <Text style={styles.buttonStyle}>
            Get Started
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding:20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8F4FD",
    flexDirection: "column",
  },
  img:{
    marginTop:20
  },
  font: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 28,
    alignSelf: "center",
    padding: 20,
    color: "#126FB2",
  },
  buttonStyle: {
    color:"#ffffff",
    borderRadius: 10,
    fontSize:18,
    fontWeight:"bold",
    backgroundColor:"#126FB2",
    paddingVertical:10,
    paddingHorizontal:20,
    marginTop:180
  
  },
  
});
