import React, { useState } from "react";
import { Text,Button, View, StyleSheet, TouchableOpacity, Image, ScrollView, SafeAreaView, ImageBackground, TextInput, Alert } from "react-native";


import { FontAwesome5 } from "react-native-vector-icons/FontAwesome5";


const Payment = ({ navigation, route}: {navigation: any,route: any}) => {
    const paymentSubmit = () => {
        Alert.alert("Attention \n", "Payment is done successfully!", [
            {
                text: "Yes",
                onPress: () => {
                  navigation.reset({
                    index: 0,
                    routes: [{ name: "ConfirmShovelerScreen" }],
                  });
                },
              },
          ]);
      };

      const signout = () => {
        Alert.alert("Attention \n", " Do you really want to sign out!", [
          {
            text: "Yes",
            onPress: () => {
              navigation.reset({
                index: 0,
                routes: [{ name: "login" }],
              });
            },
          },
          {
            text: "No",
            onPress: () => {
              navigation.goBack();//paymentSubmit
            },
            style: "cancel",
          },
        ]);
      };
  return (
    <ScrollView>
    {/* Start the navigation */}
    
    <View style={styles.wrapper}>
        <View style={styles.menu}>
        <TouchableOpacity activeOpacity={0.5} 
            
            onPress={() => navigation.navigate("ConfirmShovelerScreen")}
          >
            <FontAwesome5 name="arrow-left" style={{fontSize:22,color:"white"}}/>
        </TouchableOpacity>
            <Text style={styles.tag}>Payment</Text>
            <TouchableOpacity activeOpacity={0.5} onPress={() => {signout();
          }} ><FontAwesome5 name="power-off" style={{fontSize:25,color:"white"}}/></TouchableOpacity>
        </View>
        {/* End of navigation */}
        {/* Body part Starts */}
        <View style={styles.formElements}>
        <View style={styles.labelName}>
            <Text style={{ width: "100%",fontWeight:"bold",fontSize:35,textAlign:"center",color:"#126FB2" }}>$130.00</Text>
                
        </View>
        <View style={{flexDirection: "row",justifyContent: "center",alignItems: "center",marginVertical:20}}>
            <Image
                    source={require('./../../assets/images/payment.png')}
                    style={{height:150,width:330}}
                />
        </View>
        <View style={styles.labelName}>
                <Text style={{ width: "40%",fontWeight:"bold",fontSize:18 }}>Card Holder's Name:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter Card Holder's Name"
                />
            </View>
            <View style={styles.labelName}>
                <Text style={{ width: "40%",fontWeight:"bold",fontSize:18 }}>Card Number:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                />
            </View>

            <View style={styles.labelName}>
                <Text style={{width:"40%",fontWeight:"bold",fontSize:18 }}>Expiration Date:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="MM/YY"
                />
            </View>
            <View style={styles.labelName}>
                <Text style={{width:"40%",fontWeight:"bold",fontSize:18 }}>CVV:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="XXX"
                />
            </View>

            <View style={styles.flexrow}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => paymentSubmit()} >
                    <Text style={styles.buttonStyle}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={() => {
            navigation.goBack();
          }}>
                    <Text style={styles.cancelButton}>Cancel</Text>
                </TouchableOpacity>

            </View>

        </View>

    </View>
</ScrollView>
)

}

const styles = StyleSheet.create({
wrapper: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        // backgroundColor: "#E8F4FD",
        },
labelName: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
        },
menu: {
        flexDirection: "row",
        width: "100%",
        padding: 15,
        borderBottomWidth: 1,
        marginTop: 30,
        borderColor: "#0f0f0f",
        justifyContent: "space-between",
        backgroundColor: "#126FB2"
},
tag:
    { fontSize: 20, 
    fontWeight: "bold",
    color:"white"
    },
formElements: {
        alignItems: 'center',
        justifyContent: 'center',
        padding:20,
        marginTop:10
            },
flexrow: {
        flexDirection: "row",
        marginVertical:20
        },

buttonStyle: {
        backgroundColor: '#126fb2',
        borderRadius: 8,
        padding: 10,
        color: "#fff",
        margin: 20,
        width: 100,
        textAlign: "center",
        fontWeight: "bold",
        fontSize:16
        },
cancelButton: {
        backgroundColor: '#900',
        borderRadius: 8,
        padding: 10,
        color: "#fff",
        margin: 20,
        width: 100,
        textAlign: "center",
        fontWeight: "bold",
        fontSize:16
        },
textInput: {
        color: '#126fb2',
        borderWidth: 1,
        borderColor: '#126fb2',
        padding: 8,
        margin: 10,
        width: "60%",
        borderRadius: 10,
        fontSize: 14,
        flex: 1,
        height:35
        },
})


export default Payment;
