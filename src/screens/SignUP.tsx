import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text, ScrollView, TouchableOpacity, KeyboardAvoidingView, Alert } from "react-native";
import  FontAwesome5  from "react-native-vector-icons/FontAwesome5";
import { signupUserFirebase } from "../services/AuthApi";
import {addUser} from '../services/DbApi';

const SignUpScreen = ({ navigation }: {navigation: any}) => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [confirmPassword, setconfirmPassword] = useState<string>("");
  const [error, setError] = useState<Boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const resetError = () => {
    setError(false);
    setErrorMsg("");
  };

  async function handleSignUP() {
    if (name === "") {
      setErrorMsg("Name is Empty");
      setError(true);
      return;
    }
    if (password === "") {
      setErrorMsg("Password is Empty");
      setError(true);
      return;
    }
    if (email === "") {
      setErrorMsg("Email is Empty");
      setError(true);
      return;
    }
    if (confirmPassword === "") {
      setErrorMsg("Confirm Password is Empty");
      setError(true);
      return;
    }
    if (password != confirmPassword) {
      setErrorMsg("Password and Confirm Password Does not match");
      setError(true);
      return;
    }
    setErrorMsg("");
    setError(false);

    try {
      await signupUserFirebase(email, password, name)
      .then((userCredentials)=>{
        if(userCredentials.user){
          userCredentials.user.updateProfile({
            displayName: name
          })
        }
      })
      .catch(function(error) {
        console.log("error setting" + error)
      });
    } catch (error) {
      console.log(error)
      Alert.alert(`Error ${error}`);
    }

    navigation.reset({
      index: 0,
      routes: [{ name: "login" }],
    });
    
  }

  const handleSubmit = () => {
    if (name === "") {
      setErrorMsg("Name is Empty");
      setError(true);
      return;
    }
    if (password === "") {
      setErrorMsg("Password is Empty");
      setError(true);
      return;
    }
    if (email === "") {
      setErrorMsg("Email is Empty");
      setError(true);
      return;
    }
    if (confirmPassword === "") {
      setErrorMsg("Confirm Password is Empty");
      setError(true);
      return;
    }
    if (password != confirmPassword) {
      setErrorMsg("Password and Confirm Password Does not match");
      setError(true);
      return;
    }
    setErrorMsg("");
    setError(false);

    

    navigation.reset({
      index: 0,
      routes: [{ name: "login" }],
    });
  };

  return (
    <View style={styles.mainBody}>
      <View style={{ flex: 0.2 }}></View>
      <ScrollView>
        <KeyboardAvoidingView enabled>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.headerTextStyle}>Create an Account</Text>
          </View>
          <Text style={styles.errorTextStyle}>{errorMsg}</Text>
          <View style={styles.SectionStyle}>
            <TextInput style={styles.inputStyle} onChange={resetError} autoCapitalize='none' placeholder={"Enter Name"} onChangeText={setName} clearTextOnFocus />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput style={styles.inputStyle} onChange={resetError} autoCapitalize='none' onChangeText={setEmail} placeholder="Enter Email" clearTextOnFocus />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput style={styles.inputStyle} onChange={resetError} onChangeText={setPassword} placeholder="Password" clearTextOnFocus secureTextEntry={true} />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput style={styles.inputStyle} onChange={resetError} onChangeText={setconfirmPassword} placeholder="Re-Enter Password" clearTextOnFocus secureTextEntry={true} />
          </View>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => {
              handleSignUP();
            }}
          >
            <Text style={styles.buttonTextStyle}>Sign Up</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

        <Text style={styles.registerTextStyle} onPress={() => navigation.navigate("login")}>
          Have an account? Login Here
        </Text>
        <View style={styles.signUpRow}>
          <TouchableOpacity style={styles.signUpImages}>
            <FontAwesome5 name="facebook" size={38} color="#126FB2" />
           </TouchableOpacity>
          <TouchableOpacity style={styles.signUpImages}>
            <FontAwesome5 name="google" size={38} color="#126FB2" />
            </TouchableOpacity>
          
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    paddingTop: 20,
    backgroundColor: "#E8F4FD",
  },
  SectionStyle: {
    flexDirection: "row",
    height: 50,
    marginVertical:10,
    marginHorizontal:40
  },
  headerTextStyle: {
    height: 100,
    marginTop: 40,
    color: "#126FB2",
    textAlign: "center",
    fontSize: 32,
    fontWeight:"bold"
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
    color: "#0A2126",
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
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpImages: {
    marginHorizontal: 30,
    width: 50,
    height: 50,
  },
});
