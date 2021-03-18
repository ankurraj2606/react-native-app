import React from "react";
import { View, Text, StyleSheet } from "react-native";
import "react-native-gesture-handler";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.maintext}>Profile</Text>
      <View>
        <Text style={styles.protext}>Name : Ankur Raj</Text>
        <Text style={styles.protext}>
          College : University Institute of Technology{" "}
        </Text>
        <Text style={styles.protext}> Mobile No : 9521417452</Text>
        <Text style={styles.protext}>Email Id : ankurraj2606@gmail.com</Text>
        <Text style={styles.protext}>
          Projects:Todo List, Calculator, Weather App
        </Text>
        <Text style={styles.protext}>
          Tech Stack Learnt : HTML, CSS, JavaScript, React.js, NodeJs,
          ExpressJS, and MongoDB
        </Text>
        <Text style={styles.footer}>
          I am a software developer.I learnt Java, Data Structures and other
          tools for web development.Reacntly I learnt React Native and this is
          my first App using react native
        </Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(204, 204, 255)",
    alignItems: "center",
    justifyContent: "center",
  },
  maintext: {
    fontSize: 35,
    textDecorationLine: "underline",
    textDecorationColor: "yellow",
    margin: 15,
    fontWeight: "700",
  },
  protext: {
    fontSize: 22,
    margin: 10,
    fontWeight: "400",
  },
  footer: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "400",
  },
});