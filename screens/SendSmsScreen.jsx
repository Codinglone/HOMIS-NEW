// import { useState } from "react";
// import { View, Text, TextInput, Button } from "react-native";
// import * as SMS from "expo-sms"

// const SendSmsScreen = async () => {
//     const [phone, setPhone] = useState('')
//     const [message, setMessage] = useState('')
//     const [error, setError] = useState('')
//     const isAvailable = await SMS.isAvailableAsync()

//     const handleSMS = async () => {
//         if (isAvailable) {
//             // do your SMS stuff here
//             const { result } = await SMS.sendSMSAsync(
//                 phone,
//                 message,
                
//               );
//           } else {
//             setError('No messages available on your phone')
//           }
//     }
//     return (
//         <View>
//             <Text>Enter mobile number</Text>
//             <TextInput 
//                 placeholder="Mobile number"
//                 onChangeText={(phone) => setPhone(phone)}
//             />
//             <Text>Enter the message</Text>
//             <TextInput placeholder="Message body" onChangeText={(message) => setMessage(message)}  />
//             <Button title="Send Message" onPress={handleSMS} />
//             {error && <Text style={{color: 'red'}}>{error}</Text>}
//         </View>
//     )
// }

// export default SendSmsScreen

import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import * as SMS from "expo-sms";

const SendSmsScreen = () => {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const [success, setSuccess] = useState('')

  useEffect(() => {
    checkSmsAvailability();
  }, []);

  const checkSmsAvailability = async () => {
    const isAvailable = await SMS.isAvailableAsync();
    setIsAvailable(isAvailable);
  };

  const handleSMS = async () => {
    if (isAvailable) {
      try {
        const { result } = await SMS.sendSMSAsync(phone, message);
        if (result === 'sent') {
          setError("");
          setSuccess("Message sent!")
        } else {
          setError("Failed to send SMS");
        }
      } catch (error) {
        setError("Error sending SMS");
      }
    } else {
      setError("No messages available on your phone");
    }
  };

  return (
    <View>
      <Text>Enter mobile number</Text>
      <TextInput
        placeholder="Mobile number"
        onChangeText={(phone) => setPhone(phone)}
      />
      <Text>Enter the message</Text>
      <TextInput
        placeholder="Message body"
        onChangeText={(message) => setMessage(message)}
      />
      <Button title="Send Message" onPress={handleSMS} />
      {error && <Text style={{ color: "red" }}>{error}</Text>}
      {success && <Text style={{ color: "green" }}>{success}</Text>}
    </View>
  );
};

export default SendSmsScreen;
