import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import { useState } from 'react';
import * as SMS from 'expo-sms'; 

export default function App() {
  const [Number, setNumber] = useState("");
  const [Message, setMessage] = useState("");

  const sendSMS = async (Number, Message) => {

    const isValid = Number && Message;
    
    if (!isValid) return false

    const { result } = await SMS.sendSMSAsync(Number, Message);

    if (result === "sent") {
      return true;
    }
    else {
      return false;
    }
  }

  return (
      <View style={styles.container}>
        <View style={styles.formContainer}> 
          <View style={{
            marginBottom : 20,

          }}>
            <Text 
            style={{
              textAlign : "center",
              fontWeight : "bold",
              fontSize : 40,
              color : "#1d3557"
              }}>SMSin</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text
            style={{
              fontWeight : 'bold',
              fontSize : 20,
              marginBottom : 5
            }}>Nomor Tujuan</Text>
            <TextInput 
            placeholder="Nomor Handphone"
            value={Number}
            onChangeText={(text) => {setNumber(text)}}
            keyboardType="number-pad"
            style={{
              borderWidth : 1,
              borderRadius : 5,
              paddingLeft : 5,
              fontSize : 18,
              padding : 5,
            }}
             />
          </View>
          <View style={styles.inputContainer}>
            <Text
            style={{
              fontWeight : 'bold',
              fontSize : 20,
              marginBottom : 5
            }}>Pesan</Text>
            <TextInput placeholder="Isi Pesan" 
            value={Message}
            onChangeText={(text) => {console.log(text);setMessage(text)}}
            multiline={true}
            numberOfLines={4}
            style={{
              borderWidth : 1,
              borderRadius : 5,
              paddingLeft : 5,
              fontSize : 18,
              textAlignVertical : "top",
              padding : 5,
            }}
            />
          </View>
          <View>
            <Button 
            title="Kirim" 
            onPress={() => {sendSMS(Number, Message)}} />
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    backgroundColor: "#f1faee",
    margin : 10,
    borderRadius : 10,
    padding : 10,
    shadowColor : "#000",
    shadowOpacity : 1
  },
  formContainer : {
    backgroundColor : "#a8dadc",
    paddingHorizontal : 10,
    paddingVertical : 30, 
    width : "70%",
    borderRadius : 10,
    shadowOpacity : 1
  },
// #b7b7a4
});
