import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.maintext}>About Page</Text>
      <Text style={{ fontSize: 20 }}>
        It's always a good idea to test your app on an actual device before
        releasing it to your users. This document will guide you through the
        necessary steps to run your React Native app on a device and to get it
        ready for production. If you used Expo CLI or Create React Native App to
        set up your project, you can preview your app on a device by scanning
        the QR code with the Expo app—but in order to build and run your app on
        a device, you will need to eject and install the native code
        dependencies from the environment setup guide.
      </Text>
      <Image
        source={{ uri: "https://reactjs.org/logo-og.png" }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    backgroundColor: "rgb(204, 255, 204)",
  },
  maintext: {
    fontSize: 30,
    marginBottom: 10,
  },
});