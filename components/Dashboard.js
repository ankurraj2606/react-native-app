import React from "react";
import {Text, View, StyleSheet} from 'react-native'
import "react-native-gesture-handler";
const Dashboard = ({ navigation, props }) => {
  return (
    <View style={styles.container}>
    <Text style={styles.dashtext}>Dashboard</Text>
    <Text style={{fontSize:25, fontWeight:"700", color:"yellow", textAlign:'center',marginLeft:'auto', marginRight:'auto'}}>Welcome Ankur, Here is your Dashboard.</Text>
      <View style={styles.dash}>
        <Text
          style={styles.profiler}
          onPress={(props) => navigation.navigate("Profile")}
        >
          Profile
        </Text>
        <Text
          style={styles.profiler}
          onPress={(props) => navigation.navigate("About")}
        >
          About
        </Text>
        <Text
          style={styles.profiler}
          onPress={(props) => navigation.navigate("Contact")}
        >
          Contact
        </Text>
      </View>
    </View>
  );
};

module.exports = Dashboard;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
  },
  dash: {
    width: 110,
    height: 675,
    borderWidth: 3,
    borderColor: "red",
    backgroundColor: "gray",
    borderRadius: 20,
  },
  dashtext: {
    fontSize: 30,
    textAlign: "center",
    color: "blue",
  },
  profiler: {
    width: 100,
    height: 30,
    margin: 3,
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 15,
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "yellow",
    color: "black",
  },
});