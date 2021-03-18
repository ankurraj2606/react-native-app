import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Alert } from 'react-native'
import 'react-native-gesture-handler'

const Loginpage = ({navigation}) => {
  var un = "ankur";
  var pas = "raj"

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  
function login(){
if(username=="ankur" && password=="raj"){
  return true
}
}

  return (
    <View style={styles.container}>
        <View style={styles.formWrapper}>
          <Text style={styles.welcomeUser}> Welcome User</Text>
          <View style={styles.formRow}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your username"
              placeholderTextColor="#333"
              value={username}
              onChangeText = {(text)=>setUsername(text)}
            />
          </View>
          <View style={styles.formRow}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
              //secureTextEntry={true}
              placeholderTextColor="#333"
              value={password}
              onChangeText={(txt)=>setPassword(txt)}
             
            />
          </View>
          <TouchableOpacity
            style={styles.signInBtn}
            onPress={login()? ()=>navigation.navigate('Dashboard') : ()=>( Alert.alert("Wrong uername/password"),4000)}
          >
            <Text style={styles.signInTxt}> Sign In </Text>
          </TouchableOpacity>
        </View>
        </View>
  )
}

export default Loginpage

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  formWrapper: {
    width: "80%",
  },
  formRow: {
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: "#ddd",
    height: 40,
    paddingHorizontal: 10,
    color: "#333",
  },
  welcomeUser: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  signInBtn: {
    backgroundColor: "blue",
    paddingVertical: 10,
  },
  signInTxt: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});