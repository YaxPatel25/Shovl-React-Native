import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from "react-native";


import { FontAwesome5 } from "react-native-vector-icons/FontAwesome5";




const HomeScreen = ({ navigation, route}: {navigation: any,route: any}) => {

    
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
            <Text style={styles.tag}>Home Screen</Text>
            <TouchableOpacity activeOpacity={0.5} onPress={() => {signout();}} >
                <FontAwesome5 name="power-off" style={{fontSize:25,color:"white"}}/>
            </TouchableOpacity>
        </View>
        {/* End of navigation */}
        {/* Body part Starts */}
        <Text style={{color:"black",textAlign:"left",fontWeight:"bold",fontSize:16,padding:10}}>Hello</Text>
        <View style={styles.formElements}>
            <View style={styles.labelName}>
                <View style={styles.leftPost}>
                      <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("AdvertiseDetails")} >
                      <Image source={require('./../../assets/images/snowAdvertise.jpeg')}
                            style={{width: 130, height:100}}/>
                        <Text style={styles.titleText}>Shoveler Needed</Text>
                        <Text style={styles.locationText}>22, Georgian Drive</Text>
                      </TouchableOpacity>
                </View>
                <View style={styles.rightPost}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("AdvertiseDetails")} >
                      <Image source={require('./../../assets/images/1.jpeg')}
                            style={{width: 130, height:100}}/>
                        <Text style={{ width:150,fontWeight:"bold",margin:5,fontSize:18,color:"#126fb2"}}>Required Shoveler</Text>
                        <Text style={{ width:150,margin:5,fontSize:14,color:"black"}}>35, Maple Drive</Text>
                      </TouchableOpacity>   
                </View>
            </View> 
            <View style={styles.labelName}>
                <View style={styles.leftPost}>
                      <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("AdvertiseDetails")} >
                      <Image source={require('./../../assets/images/2.jpeg')}
                            style={{width: 130, height:100}}/>
                        <Text style={styles.titleText}>Hiring Shovler</Text>
                        <Text style={styles.locationText}>Barrie, Ontario</Text>
                      </TouchableOpacity>
                </View>
                <View style={styles.rightPost}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {navigation.navigate("AdvertiseDetails")}} >
                      <Image source={require('./../../assets/images/3.jpeg')}
                            style={{width: 130, height:100}}/>
                        <Text style={{ width:150,fontWeight:"bold",margin:5,fontSize:18,color:"#126fb2"}}>Shoveler Needed</Text>
                        <Text style={{ width:150,margin:5,fontSize:14,color:"black"}}>22, Georgian Drive</Text>
                      </TouchableOpacity>   
                </View>
            </View> 
            <View style={styles.labelName}>
                <View style={styles.leftPost}>
                      <TouchableOpacity activeOpacity={0.5} onPress={() => {navigation.navigate("AdvertiseDetails")}} >
                      <Image source={require('./../../assets/images/4.jpeg')}
                            style={{width: 130, height:100}}/>
                        <Text style={styles.titleText}>Snow Removal required</Text>
                        <Text style={styles.locationText}>Toronto, Ontario</Text>
                      </TouchableOpacity>
                </View>
                <View style={styles.rightPost}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {navigation.navigate("AdvertiseDetails")}} >
                      <Image source={require('./../../assets/images/5.jpeg')}
                            style={{width: 130, height:100}}/>
                        <Text style={{ width:150,fontWeight:"bold",margin:5,fontSize:18,color:"#126fb2"}}>Shoveler required</Text>
                        <Text style={{ width:150,margin:5,fontSize:14,color:"black"}}>Markham, Ontario</Text>
                      </TouchableOpacity>   
                </View>
            </View> 
            <View style={styles.labelName}>
                <View style={styles.leftPost}>
                      <TouchableOpacity activeOpacity={0.5} onPress={() => {navigation.navigate("AdvertiseDetails")}} >
                      <Image source={require('./../../assets/images/6.jpeg')}
                            style={{width: 130, height:100}}/>
                        <Text style={styles.titleText}>Hiring Shoveler</Text>
                        <Text style={styles.locationText}>1, Oak Street, Barrie</Text>
                      </TouchableOpacity>
                </View>
                <View style={styles.rightPost}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {navigation.navigate("AdvertiseDetails")}} >
                      <Image source={require('./../../assets/images/7.jpeg')}
                            style={{width: 130, height:100}}/>
                        <Text style={{ width:150,fontWeight:"bold",margin:5,fontSize:18,color:"#126fb2"}}>Shoveler Needed</Text>
                        <Text style={{ width:150,margin:5,fontSize:14,color:"black"}}>132, Bayfield Street</Text>
                      </TouchableOpacity>   
                </View>
            </View>
            <View style={styles.labelName}>
                <View style={styles.leftPost}>
                      <TouchableOpacity activeOpacity={0.5} onPress={() => {navigation.navigate("AdvertiseDetails")}} >
                      <Image source={require('./../../assets/images/8.jpeg')}
                            style={{width: 130, height:100}}/>
                        <Text style={styles.titleText}>Shoveler Required</Text>
                        <Text style={styles.locationText}>22, Toronto Street, Barrie</Text>
                      </TouchableOpacity>
                </View>
                <View style={styles.rightPost}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {navigation.navigate("AdvertiseDetails")}} >
                      <Image source={require('./../../assets/images/9.jpeg')}
                            style={{width: 130, height:100}}/>
                        <Text style={{ width:150,fontWeight:"bold",margin:5,fontSize:18,color:"#126fb2"}}>Shoveler Needed</Text>
                        <Text style={{ width:150,margin:5,fontSize:14,color:"black"}}>33, Ross Drive</Text>
                      </TouchableOpacity>   
                </View>
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
        marginVertical:8,
        },
leftPost:{
          width:"50%",
          marginRight:10,
          backgroundColor:"#E8F4FD",
          padding:15
        },
rightPost:{
          width:"50%",
          marginLeft:5,
          backgroundColor:"#E8F4FD",
          padding:15
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
        paddingHorizontal:20
        },
flexrow: {
        flexDirection: "row",
        },
titleText:{
  width:150,
  fontWeight:"bold",
  margin:5,
  fontSize:18,
  color:"#126fb2"
},
locationText:{
   width:150,
   margin:5,
   fontSize:14,
   color:"black"}


})


export default HomeScreen;

