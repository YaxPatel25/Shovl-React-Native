import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Alert } from "react-native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


const ConfirmShovelerScreen = ({ navigation, route}: {navigation: any,route: any}) => {
    const acceptShoveler = () => {
      Alert.alert("Attention \n", " You have accepted the request. \n\n You'll be redirect to Payment screen", [
            {
              text: "ok",
              onPress: () => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Payment" }],
                });
              },
            },
            {
              text: "Cancel",
              onPress: () => {
                  navigation.navigate("ConfirmShovelerScreen")//onPress={() => navigation.navigate("BidPricing")}
              },
              style: "cancel",
            },
          ]);
      };
      const rejectShoveler = () => {
            Alert.alert("Request is Rejected")
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
              navigation.goBack();
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
                  onPress={() => navigation.navigate("Home")}
            >
                  <FontAwesome5 name="arrow-left" size = {22} color ="white"/>
            </TouchableOpacity>
            <Text style={styles.tag}>Confirm Shoveler</Text>
            <TouchableOpacity activeOpacity={0.5} onPress={() => {signout();}} >
                <FontAwesome5 name="power-off" size = {25} color = "white"/>
            </TouchableOpacity>
        </View>
        {/* End of navigation */}
        {/* Body part Starts */}
        <View style={styles.formElements}>
        <View style={styles.labelName}>
              <View style={{flexDirection:"column", width:"50%"}}>
                <Text style={{fontWeight:"bold",fontSize:18 }}>Shoveler 1</Text>
                <Text style={{fontSize:14 }}>Name : David Johnson</Text>
                <Text style={{fontSize:14 }}>$10 X 3 hours</Text>
              </View>
         
              <TouchableOpacity activeOpacity={0.5} onPress={() => { acceptShoveler(); }} >
                    <Text style={styles.buttonStyle}><FontAwesome5 name="check" color="white" opacity ={0.5} size={16}/>
                    Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { rejectShoveler(); }}>
                    <Text style={styles.cancelButton}>X Reject</Text>
              </TouchableOpacity>
        </View>

        <View style={styles.labelName}>
              <View style={{flexDirection:"column", width:"50%"}}>
                <Text style={{fontWeight:"bold",fontSize:18 }}>Shoveler 2</Text>
                <Text style={{fontSize:14 }}>Name : John Davidson</Text>
                <Text style={{fontSize:14 }}>$20 X 3 hours</Text>
              </View>
         
              <TouchableOpacity activeOpacity={0.5} onPress={() => { acceptShoveler(); }} >
                    <Text style={styles.buttonStyle}><FontAwesome5 name="check" color="white" opacity ={0.5} size={16}/>
                    Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { rejectShoveler(); }}>
                    <Text style={styles.cancelButton}>X Reject</Text>
              </TouchableOpacity>
        </View>
        <View style={styles.labelName}>
              <View style={{flexDirection:"column", width:"50%"}}>
                <Text style={{fontWeight:"bold",fontSize:18 }}>Shoveler 3</Text>
                <Text style={{fontSize:14 }}>Name : Mark Johnson</Text>
                <Text style={{fontSize:14 }}>$10 X 3 hours</Text>
              </View>
         
              <TouchableOpacity activeOpacity={0.5} onPress={() => { acceptShoveler(); }} >
                    <Text style={styles.buttonStyle}><FontAwesome5 name="check" color="white" opacity ={0.5} size={16}/>
                    Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { rejectShoveler();}}>
                    <Text style={styles.cancelButton}>X Reject</Text>
              </TouchableOpacity>
        </View>
        <View style={styles.labelName}>
              <View style={{flexDirection:"column", width:"50%"}}>
                <Text style={{fontWeight:"bold",fontSize:18 }}>Shoveler 4</Text>
                <Text style={{fontSize:14 }}>Name : John Markson</Text>
                <Text style={{fontSize:14 }}>$30 X 1 hours</Text>
              </View>
         
              <TouchableOpacity activeOpacity={0.5} onPress={() => { acceptShoveler(); }} >
                    <Text style={styles.buttonStyle}><FontAwesome5 name="check" color="white" opacity ={0.5} size={16}/>
                    Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { rejectShoveler(); }}>
                    <Text style={styles.cancelButton}>X Reject</Text>
              </TouchableOpacity>
        </View>
        <View style={styles.labelName}>
              <View style={{flexDirection:"column", width:"50%"}}>
                <Text style={{fontWeight:"bold",fontSize:18 }}>Shoveler 5</Text>
                <Text style={{fontSize:14 }}>Name : David Jones</Text>
                <Text style={{fontSize:14 }}>$15 X 3 hours</Text>
              </View>
         
              <TouchableOpacity activeOpacity={0.5} onPress={() => { acceptShoveler(); }} >
                    <Text style={styles.buttonStyle}><FontAwesome5 name="check" color="white" opacity ={0.5} size={16}/>
                    Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { rejectShoveler(); }}>
                    <Text style={styles.cancelButton}>X Reject</Text>
              </TouchableOpacity>
        </View>
        <View style={styles.labelName}>
              <View style={{flexDirection:"column", width:"50%"}}>
                <Text style={{fontWeight:"bold",fontSize:18 }}>Shoveler 6</Text>
                <Text style={{fontSize:14 }}>Name : Mia Johnson</Text>
                <Text style={{fontSize:14 }}>$13 X 3 hours</Text>
              </View>
         
              <TouchableOpacity activeOpacity={0.5} onPress={() => { acceptShoveler(); }} >
                    <Text style={styles.buttonStyle}><FontAwesome5 color="white" opacity ={0.5} size={16}/>
                    Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { rejectShoveler(); }}>
                    <Text style={styles.cancelButton}>X Reject</Text>
              </TouchableOpacity>
        </View>
        <View style={styles.labelName}>
              <View style={{flexDirection:"column", width:"50%"}}>
                <Text style={{fontWeight:"bold",fontSize:18 }}>Shoveler 7</Text>
                <Text style={{fontSize:14 }}>Name : Mr. Cullins</Text>
                <Text style={{fontSize:14 }}>$22 X 2 hours</Text>
              </View>
         
              <TouchableOpacity activeOpacity={0.5} onPress={() => { acceptShoveler(); }} >
                    <Text style={styles.buttonStyle}><FontAwesome5 name="check" color="white" opacity ={0.5} size={16}/>
                    Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { rejectShoveler(); }}>
                    <Text style={styles.cancelButton}>X Reject</Text>
              </TouchableOpacity>
        </View>
        <View style={styles.labelName}>
              <View style={{flexDirection:"column", width:"50%"}}>
                <Text style={{fontWeight:"bold",fontSize:18 }}>Shoveler 8</Text>
                <Text style={{fontSize:14 }}>Name : David Anniston</Text>
                <Text style={{fontSize:14 }}>$30 X 1 hours</Text>
              </View>
         
              <TouchableOpacity activeOpacity={0.5} onPress={() => { acceptShoveler(); }} >
                    <Text style={styles.buttonStyle}><FontAwesome5 name="check" color="white" opacity ={0.5} size={16}/>
                    Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { rejectShoveler(); }}>
                    <Text style={styles.cancelButton}>X Reject</Text>
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
        backgroundColor: "white",
        },
labelName: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginVertical:10,
        borderBottomWidth:1,
        borderBottomColor:"#dddddd",
        backgroundColor:"#E8F4FD",
        padding:20,
        borderRadius:10
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
        padding:20
            },
flexrow: {
        flexDirection: "row",
        },

buttonStyle: {
        backgroundColor: '#126fb2',
        borderRadius: 10,
        padding: 8,
        color: "#fff",
        marginVertical: 20,
       marginHorizontal:5,
        textAlign: "center",
        fontWeight: "bold",
        fontSize:14
        },
cancelButton: {
        backgroundColor: '#900',
        borderRadius: 10,
        padding: 8,
        color: "#fff",
        marginVertical: 20,
        marginHorizontal:5,
        textAlign: "center",
        fontWeight: "bold",
        fontSize:14
        },


})


export default ConfirmShovelerScreen;
