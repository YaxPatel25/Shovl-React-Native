import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text, Image, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const LoginScreen = ({ navigation }: {navigation: any}) => {
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [error, setError] = useState<Boolean>(false);
  const [errorMsg, setErrorMsg] = useState<String>("");


  const resetError = () => {
    setError(false);
    setErrorMsg("");
  };


  const handleLogin = () => {
    if (email === "") {
      setErrorMsg("Email is Empty");
      setError(true);
      return;
    }
    if (password === "") {
      setErrorMsg("Password is Empty");
      setError(true);
      return;
    }
    setErrorMsg("");
    setError(false);

  };
  return (
    <View style={styles.mainBody}>
      <View>
        <KeyboardAvoidingView enabled>
          <View style={{ alignItems: "center" }}>
            <Image source={require("./../../assets/images/shovlLogo_s.png")} style={styles.img} />
          </View>
          <Text style={styles.errorTextStyle}>{errorMsg}</Text>
          <View style={styles.SectionStyle}>
            <TextInput style={styles.inputStyle} onChange={resetError} placeholder={"Enter email address"} onChangeText={setEmail} clearTextOnFocus />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput style={styles.inputStyle} onChange={resetError} onChangeText={setPassword} placeholder="Enter Password" clearTextOnFocus inlineImageLeft="favicon" secureTextEntry={true} />
          </View>

          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => {
              handleLogin();
            }}
          >
            <Text style={styles.buttonTextStyle}>Login</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

        <Text style={styles.registerTextStyle} onPress={() => navigation.navigate("signUp")}>
          Not a Member ? Register
        </Text>
        
        <View style={styles.signUpRow}>
          <TouchableOpacity style={styles.signUpImages}>
            <FontAwesome name="facebook" size={38} color="#126FB2" />
           </TouchableOpacity>
          <TouchableOpacity style={styles.signUpImages}>
            <FontAwesome name="google" size={38} color="#126FB2" />
            </TouchableOpacity>
          
        </View>
      </View>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#E8F4FD",
  },
  SectionStyle: {
    flexDirection: "row",
    height: 50,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  img: {
    width: 300,
    height: 150,
    resizeMode: "stretch",
    margin: 30,
  },
  buttonStyle: {
    backgroundColor: "#126FB2",
    height: 50,
    borderRadius: 10,
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#126FB2",
    alignItems: "center",
    marginHorizontal: 100,
    marginVertical:20
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 20,
    fontWeight:"bold",
  },
  inputStyle: {
    height: 50,
    borderColor: "#126FB2",
    borderRadius: 10,
    width: "80%",
    fontSize: 16,
    flex: 1,
    color: "#126FB2",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
  },
  registerTextStyle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center",
    padding: 10,
    color: "#126FB2",
  },
  errorTextStyle: {
    color: "#880808",
    textAlign: "center",
    fontSize: 16,
  },
  signUpRow: {
    flex: 0.4,
    flexDirection: "row",
    position: "relative",
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpImages: {
    marginHorizontal: 30,
    width: 50,
    height: 50,
  },
});
