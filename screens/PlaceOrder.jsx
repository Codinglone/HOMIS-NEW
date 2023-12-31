import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from "react-native";

const PlaceOrder = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = () => {

    if(fullName === "" || phone === ""){
      setError("Please fill all the fields")
      setTimeout(() => {
        setError("")
      }, 5000)
      
    }
    else {
      navigation.navigate("Normal Order")
    }
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.views}>
        <Text style={styles.labels}>Enter Full Name</Text>
        <TextInput
          style={styles.fields}
          placeholder="Full name"
          onChangeText={(name) => setPhone(name)}
        />
      </View>
      <View style={styles.views}>
        <Text style={styles.labels}>Enter Mobile Number</Text>
        <TextInput
          style={styles.fields}
          placeholder="Mobile number"
          onChangeText={(phone) => setFullName(phone)}
        />
      </View>
      <View style={styles.views}>
        <Button title="Continue" onPress={handleSubmit} />
      </View>
      {error && (<Text style={styles.error}>{error}</Text>)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10
  },
  labels: {
    fontSize: 18,
    fontWeight: 600,
  },
  fields: {
    borderBottomWidth: 1,
    borderWidth: 0,
    borderBottomColor: "black",
    paddingVertical: 2,
    marginVertical: 2
  },
  views: {
    marginVertical: 12
  },
  error: {
    color: "#EB455F",
    fontSize: 24,
    fontWeight: 600
  }
})

export default PlaceOrder;
