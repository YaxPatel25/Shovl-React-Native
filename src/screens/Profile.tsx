import React, { useState } from "react";
import { Text,Button, View, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, Alert } from "react-native";

import { FontAwesome5 } from "react-native-vector-icons/FontAwesome5";


const ProfileScreen = ({ navigation, route}: {navigation: any,route: any}) => {

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
            <Text style={styles.tag}>Profile</Text>
            <TouchableOpacity activeOpacity={0.5} onPress={() => {signout();}} >
                <FontAwesome5 name="power-off" style={{fontSize:25,color:"white"}}/>
            </TouchableOpacity>
        </View>
        {/* End of navigation */}
        {/* Body part Starts */}
        
        <View style={styles.formElements}>
                    <Image
                        source={require('./../../assets/images/profilePicture.png')}
                        resizeMode="center"
                        style={styles.image}
                    />
                    <View style={styles.labelName}>
                    <Text style={{width:"15%"}}>Name:</Text>
                        <TextInput
                            style={styles.textInput}
                            value="John Markson" editable={false} selectTextOnFocus={false}
                        />
                    </View>
                    <View style={styles.labelName}>
                    <Text style={{width:"15%"}}>Age:</Text>
                        <TextInput
                            style={styles.textInput}
                            value="25" editable={false} selectTextOnFocus={false}
                        />
                    </View>
                    <View style={styles.labelName}>
                        <Text style={{width:"15%"}}>Gender:</Text>
                        <TextInput
                            style={styles.textInput}
                            value="Male" editable={false} selectTextOnFocus={false}
                        />
                    </View>
                    <View style={styles.labelName}>
                    <Text style={{width:"15%"}}>Address:</Text>
                        <TextInput
                            style={styles.textInput}
                            value="22, Maple View" editable={false} selectTextOnFocus={false}
                        />
                    </View>

                    <View style={styles.labelName}>
                        <Text style={{width:"15%"}}></Text>
                        <TextInput
                        style={styles.textInput}
                        value="Barrie, ON" editable={false} selectTextOnFocus={false}
                    />
                    </View>
                    

                    <View style={styles.labelName}>
                    <Text style={{width:"15%"}}>Zip Code:</Text>
                        <TextInput
                            style={styles.textInput}
                            value="G1F 5F2" editable={false} selectTextOnFocus={false}
                        />
                    </View>

                </View>
            </View>
</ScrollView>
)

}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    labelName: {
        flexDirection: "row",
        width: "100%",
        justifyContent:"center",
        alignItems:"center"
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
}       ,
tag:
    { fontSize: 20, 
    fontWeight: "bold",
    color:"white"
    },
    image: {
        width: 400,
        height: 200,
    },

    formElements: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    textInput: {
        color:'#000',
        borderBottomWidth: 2,
        borderColor: '#126fb2',
        padding: 8,
        margin: 8,
        width: "60%",
        borderRadius: 8,
        fontSize: 16
    },
})


export default ProfileScreen;
