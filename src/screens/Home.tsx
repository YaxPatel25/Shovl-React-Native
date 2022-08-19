import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import auth from '@react-native-firebase/auth';
import { GetAllPosts} from "../services/DbApi";
import { PostModel } from "../model/PostModel";
import {useIsFocused} from '@react-navigation/native';

const sampleImages = [
	{ image:require('./../../assets/images/snowAdvertise.jpeg')},
  { image:require('./../../assets/images/1.jpeg')},
  { image:require('./../../assets/images/1.jpeg')},
  { image:require('./../../assets/images/2.jpeg')},
  { image:require('./../../assets/images/3.jpeg')},
  { image:require('./../../assets/images/4.jpeg')},
  { image:require('./../../assets/images/5.jpeg')}
];


const HomeScreen = ({ navigation, route}: {navigation: any,route: any}) => {
  const [loading, setLoading] = useState(true);
  const [images, setSampleImages] = useState(sampleImages); 
  const [PostList, setPostsList] = useState<PostModel[]>([]);
  const isFocused = useIsFocused();

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

  const getPosts = async () => {
    var myTasks = await GetAllPosts();
    PostList.splice(0);
    if (myTasks != null) {
      myTasks.forEach((task: PostModel) => {
        PostList.push(task);
        console.log(task)
      });
      setLoading(false);
    }
  };


const renderRowReal = ({item}) => {
  return (
  <View style={styles.item}>
  <Image source={sampleImages[Math.floor(Math.random() * sampleImages.length)].image} style={{width: 130, height:100}}/>
  <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("AdvertiseDetails",item)} >
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Text style={styles.locationText}>{item.location}</Text>
  </TouchableOpacity>
</View>);
};

  useEffect(() => {

  });

  useEffect(() => {
    if (isFocused) {
      getPosts()
      setSampleImages(sampleImages)
    }
  }, [isFocused]);

  return (

    <SafeAreaView style={{flex: 1}}>
      <View style={styles.wrapper}>
          <View style={styles.menu}>
                  <Text style={styles.tag}>Home Screen</Text>
                  <TouchableOpacity activeOpacity={0.5} onPress={() => {signout();}} >
                      <FontAwesome5 name="power-off" size= {25} color ="white"/>
                  </TouchableOpacity>
              </View>
              <Text style={{color:"black",textAlign:"left",fontWeight:"bold",fontSize:16,padding:10}}>Hello {auth().currentUser?.displayName}</Text>
            <View style={styles.wrapper}>
            
            {loading ? (
            <Text>No items</Text>
          ) : (
            <FlatList
            numColumns={2}
            data={ PostList }
            renderItem={renderRowReal}
            />)}
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

