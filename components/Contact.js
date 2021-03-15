import React from "react";
import { View, Text } from "react-native";

export default function Contact(props) {
  return (
    <View
      style={{
        backgroundColor: "orange",
        borderWidth: 2,
        borderColor: "pink",
        borderRadius: 15,
        margin: 5,
      }}
    >
      <Text style={{ fontSize: 35, textAlign: "center" }}>Contact</Text>
      <Text
        style={{
          fontSize: 20,
          marginLeft: 15,
          marginRight: 15,
        }}
      >
        A well-crafted contact page will enhance user experience and cultivate a
        strong relationship with your leads. Although every business is
        different, and every buyer persona requires different things, there are
        multiple elements in the following examples that you can pull from and
        include (or not include) in your own contact page.
      </Text>
      <Text
        style={{
          fontSize: 18,
          marginLeft: 15,
          marginRight: 15,
          marginTop: 10,
          backgroundColor: "gray",
        }}
      >
        Hands down, the best thing about Choice Screening's 'Contact Us' page is
        their copy. It doesn't get much better than this — all starting with
        that concise, delightful "Talk to a Human" header. Following all that
        great copy is a well-organized page with contact information including
        emails for every different department, followed by a form. The form's a
        little lengthy for most businesses, but for a business that runs
        background checks of all kinds, the form fields are likely necessary to
        help them organize all their inquiries.
      </Text>
    </View>
  );
}
