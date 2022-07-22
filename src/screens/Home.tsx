import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from "react-native";
import { FlatList } from "react-native-gesture-handler";


import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


//const HomeTabStack = createNativeStackNavigator();


const HomeScreen = ({ navigation, route}: {navigation: any,route: any}) => {
  // const username = route.params.username;

  
  const [posts, setPosts] = useState([
	{ id:1, image: require('./../../assets/images/snowAdvertise.jpeg'), title: "Shoveler Needed", location: "22, Georgian Drive",postedBy:"User 1", description:"Desc 1" },
  { id:2,image: require('./../../assets/images/1.jpeg'), title: "Required Shoveler", location: "35, Maple Drive",postedBy:"User 2", description:"Desc 1" },
  { id:3,image: require('./../../assets/images/1.jpeg'), title: "Required Shoveler", location: "35, Maple Drive",postedBy:"User 3" , description:"Desc 1"},
  { id:4,image: require('./../../assets/images/2.jpeg'), title: "Hiring Hiring Hiring", location: "Barrie, Ontario" ,postedBy:"User 4", description:"Desc 1"},
  { id:5,image: require('./../../assets/images/3.jpeg'), title: "Snow Removal", location: "244, Georgian Drive" ,postedBy:"User 5", description:"Desc 1"},
  { id:6,image: require('./../../assets/images/4.jpeg'), title: "Snow Clearing needed", location: "21 Emcarr Drive" ,postedBy:"User 6", description:"Desc 1"},
  { id:7,image: require('./../../assets/images/5.jpeg'), title: "Shovelers required", location: "30 Glenda Road" ,postedBy:"User 7", description:"Desc 1"},
  
]); 

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

    <SafeAreaView style={{flex: 1}}>
      <View style={styles.wrapper}>
        
          <View style={styles.menu}>
                  <Text style={styles.tag}>Home Screen</Text>
                  <TouchableOpacity activeOpacity={0.5} onPress={() => {signout();}} >
                      <FontAwesome5 name="power-off" size= {25} color ="white"/>
                  </TouchableOpacity>
              </View>
              <Text style={{color:"black",textAlign:"left",fontWeight:"bold",fontSize:16,padding:10}}>Hello</Text>
            <View style={styles.wrapper}>
            
            <FlatList
            numColumns={2}
            data={
              posts
            }
            renderItem={({item})=>(
                    <View style={styles.item}>
                      {<TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("AdvertiseDetails",item)} >
                                    <Image source={item.image}
                                          style={{width: 130, height:100}}/>
                                      <Text style={styles.titleText}>{item.title}</Text>
                                      <Text style={styles.locationText}>{item.location}</Text>
                      </TouchableOpacity>}

                    </View>
            )}/>
            </View>
      </View>
</SafeAreaView>)
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },

wrapper: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "white",
        },
        item: {
          width: '50%', // is 50% of container width
          marginLeft:20,
          marginRight:-20
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

