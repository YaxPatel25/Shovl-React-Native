import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, SafeAreaView, ImageBackground, TextInput, Alert } from "react-native";


import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


const AdvertiseDetails = ({ navigation, route}: {navigation: any,route: any}) => {
  const postDetails = route.params
  
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
        <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.goBack(); }}>
            <FontAwesome5 name="arrow-left" size={22} color="white"/>
        </TouchableOpacity>
            <Text style={styles.tag}>Advertise Details</Text>
            <TouchableOpacity activeOpacity={0.5} onPress={() => {signout();
          }} ><FontAwesome5 name="power-off" size={25} color="white"/></TouchableOpacity>
        </View>
        {/* End of navigation */}
        {/* Body part Starts */}
        <View style={styles.formElements}>
        <View style={styles.labelName}>
            <Text style={{ width: "30%",fontWeight:"bold",fontSize:18 }}>Posted By:</Text>
            <Text style={{ width: "70%",fontSize:16 }}>{postDetails.postedBy}</Text>
                
        </View>
        <View style={styles.labelName}>
            <Image
                    source={require('./../../assets/images/snowAdvertise.jpeg')}
                    style={{width: "90%", height:150,marginLeft:10}}
                />
        </View>
            <View style={styles.labelName}>
                <Text style={{ width: "30%",fontWeight:"bold",fontSize:18 }}>Address:</Text>
                <Text style={{ width: "70%",fontSize:16,padding:5 }}>{postDetails.location}</Text>
            </View>
            <View style={styles.labelName}>
                <Text style={{ width: "30%",fontWeight:"bold",fontSize:18 }}>Description:</Text>
                <Text style={{ width: "70%",fontSize:16,padding:5}}>{postDetails.description}</Text>
                </View>
            <View style={styles.labelName}>
                <Text style={{fontWeight:"bold",fontSize:18 ,textAlign:"center",width:"50%",marginVertical:7}}>From Date:</Text>
                <Text style={{fontWeight:"bold",fontSize:18 ,textAlign:"center",width:"50%",marginVertical:7}}>To Date:</Text>
                
            </View>
            <View style={styles.labelName}>
            <Text style={{ width: "50%",textAlign:"center",fontSize:16 }}> 04/05/2022</Text>
            <Text style={{ width: "50%",textAlign:"center",fontSize:16 }}> 04/06/2022</Text>
            </View>
            <View style={styles.labelName}>
            <Text style={{fontWeight:"bold",fontSize:18 ,textAlign:"center",width:"50%",marginVertical:7}}>From Time:</Text>
            <Text style={{fontWeight:"bold",fontSize:18 ,textAlign:"center",width:"50%",marginVertical:7}}>To Time:</Text>
                
            </View>
            <View style={styles.labelName}>
            <Text style={{ width: "50%",textAlign:"center",fontSize:16 }}>10:00</Text>
            <Text style={{ width: "50%",textAlign:"center",fontSize:16 }}>14:00</Text>
            </View>
            <View style={styles.flexrow}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("BidPricing")} >
                    <Text style={styles.buttonStyle}>Apply</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5}
           onPress={() => {
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
        alignItems: "center",
        marginBottom:10
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
logoimage:
{ width: 30, height: 30 },
tag:
    { fontSize: 20, 
    fontWeight: "bold",
    color:"white"
    },
image: {
    width: 400,
    height: 200,
    },
bgimage: {
    justifyContent: "center",
    flex: 1
    },
formElements: {
        alignItems: 'center',
        justifyContent: 'center',
        padding:20,
        marginTop:10
            },
flexrow: {
        flexDirection: "row",
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
        margin: 8,
        width: "60%",
        borderRadius: 10,
        fontSize: 14,
        flex: 1,
        height:35
        },


})


export default AdvertiseDetails;
