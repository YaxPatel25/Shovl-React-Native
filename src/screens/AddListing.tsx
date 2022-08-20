import React, { useState } from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity, Image, ScrollView, SafeAreaView, ImageBackground, TextInput, Alert } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import DateTimePicker from '../components/DateTimePicker';
import { addPost} from "../services/DbApi";
import { PostModel } from "../model/PostModel";

const AddListing = ({ navigation, route}: {navigation: any,route: any}) => {
      const [title, setTitle] = useState<string>('');
      const [description, setDescription] = useState<string>('');
      const [address, setAddress] = useState<string>('');
      const [fromDate, setFromDate] = useState<string>('');
      const [toDate, setToDate] = useState<string>('');
      const [fromTime, setFromTime] = useState<string>('');
      const [toTime, setToTime] = useState<string>('');

      const getFromDateTime = (fromDate: Date) => {
        if (fromDate != null) {
          setFromTime(fromDate.toLocaleTimeString())
          setFromDate(fromDate.toLocaleDateString())
        }
      };

      const getToDateTime = (toDate: Date) => {
        if (toDate != null) {
          setToTime(toDate.toLocaleTimeString())
          setToDate(toDate.toLocaleDateString())
        }
      };


    const publishPost = () => {
      if (title == '' && description == '' && address == "") {
        Alert.alert('Please Fill in the fields');
      } 
      else{
        var post: PostModel = {
          title: title.toString(),
          description: description.toString(),
          location:address.toString(),
          dateFrom: fromDate.toString(),
          dateTo: toDate.toString(),
          timeFrom: fromTime.toString(),
          timeTo: toTime.toString()
        };
        console.log(post);
        addPost(post).then((result: boolean) => {
            navigation.navigate('bottomNav');
        });
      }
  }
  
    

    const addListings = () => {
       publishPost();
       Alert.alert("Added Successfully! You can see your post in Home Screen")

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
            <Text style={styles.tag}>Add Listing</Text>
            <TouchableOpacity activeOpacity={0.5} onPress={() => {signout();
          }} ><FontAwesome5 name="power-off" size = {25} color = "white"/></TouchableOpacity>
        </View>
        {/* End of navigation */}
        {/* Body part Starts */}
        <View style={styles.formElements}>
        <View style={styles.labelName}>
                <Text style={{ width: "30%",fontWeight:"bold",fontSize:18 } } >Title:</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={setTitle}
                    placeholder=" Enter Title"
                />
            </View>

            <View style={styles.labelName}>
                <Text style={{ width: "30%",fontWeight:"bold",fontSize:18 }}>Address:</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={setAddress}
                    placeholder=" Enter Address"
                />
            </View>
            <View style={styles.labelName}>
                <Text style={{ width: "30%",fontWeight:"bold",fontSize:18 }}>Description</Text>

                <TextInput style={styles.textDescription}
                    multiline={true} 
                    numberOfLines={4} 
                    onChangeText={setDescription}
                    placeholder=" Description of the property."
                /></View>
            <View style={styles.topheading}>
                <Text style={{fontWeight:"bold",fontSize:18 ,textAlign:"left",width:"50%",marginVertical:7}}>From:</Text>                
            </View>
            <View style={styles.labelName}>
            <TextInput
                    style={styles.textInput}
                    value = {fromDate}
                    placeholder="MM/DD/YYYY"
                />
                <TextInput
                    style={styles.textInput}
                    value = {fromTime}
                    placeholder="HH:MM"
                />
                <DateTimePicker dateTime={getFromDateTime} />
            </View>
            <View style={styles.topheading}>
                <Text style={{fontWeight:"bold",fontSize:18 ,textAlign:"left",width:"50%",marginVertical:7}}>To:</Text>                
            </View>
            <View style={styles.labelName}>
            <TextInput
                    style={styles.textInput}
                    value = {toDate}
                    placeholder="MM/DD/YYYY"
                />
                <TextInput
                    style={styles.textInput}
                    value = {toTime}
                    placeholder="HH:MM"
                />
                <DateTimePicker dateTime={getToDateTime} />
            </View>
            <View style={styles.flexrow}>
                <TouchableOpacity activeOpacity={0.5}
          onPress={() => {
            addListings();
          }} >
                    <Text style={styles.buttonStyle}>Add</Text>
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
        alignItems: "center"
        },

topheading: {
          flexDirection: "row",
          width: "100%",
          paddingLeft: 15
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
        textDescription: {
            color: '#126fb2',
            borderWidth: 1,
            borderColor: '#126fb2',
            padding: 8,
            margin: 8,
            width: "60%",
            borderRadius: 10,
            fontSize: 14,
            flex: 1,
            height:50
            }

})


export default AddListing;
