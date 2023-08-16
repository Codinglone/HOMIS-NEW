import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from "react-native";

const PlaceOrder = () => {
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("")
  const [error, setError] = useState("")
  return (
    <ScrollView>
      <View>
        <Text style={styles.labels}>Enter Full Name</Text>
        <TextInput
          style={styles.fields}
          placeholder="Full name"
          onChangeText={(name) => setPhone(name)}
        />
      </View>
      <View>
        <Text style={styles.labels}>Enter Mobile Number</Text>
        <TextInput
          placeholder="Mobile number"
          onChangeText={(phone) => setFullName(phone)}
        />
      </View>
      <View>
        <Button title="Continue" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  labels: {
    fontSize: 18,
    fontWeight: 600,
  },
  fields: {
    borderBottomWidth: 2,
    borderWidth: 0,
    borderBottomColor: "black",
    paddingVertical: 2,
    marginVertical: 2
  }
})

export default PlaceOrder;

// const SendSmsScreen = () => {
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [isAvailable, setIsAvailable] = useState(false);
//   const [success, setSuccess] = useState('')

//   useEffect(() => {
//     checkSmsAvailability();
//   }, []);

//   const checkSmsAvailability = async () => {
//     const isAvailable = await SMS.isAvailableAsync();
//     setIsAvailable(isAvailable);
//   };

//   const handleSMS = async () => {
//     if (isAvailable) {
//       try {
//         const { result } = await SMS.sendSMSAsync(phone, message);
//         if (result === 'sent') {
//           setError("");
//           setSuccess("Message sent!")
//         } else {
//           setError("Failed to send SMS");
//         }
//       } catch (error) {
//         setError("Error sending SMS");
//       }
//     } else {
//       setError("No messages available on your phone");
//     }
//   };

//   return (
//     <View>
//       <Text>Enter mobile number</Text>
//       <TextInput
//         placeholder="Mobile number"
//         onChangeText={(phone) => setPhone(phone)}
//       />
//       <Text>Enter the message</Text>
//       <TextInput
//         placeholder="Message body"
//         onChangeText={(message) => setMessage(message)}
//       />
//       <Button title="Send Message" onPress={handleSMS} />
//       {error && <Text style={{ color: "red" }}>{error}</Text>}
//       {success && <Text style={{ color: "green" }}>{success}</Text>}
//     </View>
//   );
// };

// export default SendSmsScreen;
