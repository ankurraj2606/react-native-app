import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import "react-native-gesture-handler";
import Profile from "./Profile";
const Dashboard = ({ navigation, props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.dashtext}>Dashboard</Text>
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

export default Dashboard;

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
