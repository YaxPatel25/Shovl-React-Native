import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = (prop: { headerTitle: any; }) => {
  const { headerTitle } = prop;
  const [date, setDate] = useState("");


  return (
    <View style={styles.wrapper}>
    
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4A57A3",
    paddingTop: 30,
  },
  headerText: {
    fontSize: 24,
    color: "white",
    fontWeight: "500",
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Header;
