import { SafeAreaView, View, TouchableOpacity, StyleSheet, Text, ScrollView } from "react-native";
import { useEffect, useState } from "react";

const NormalOrder = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <Text>Normal Order Screen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        paddingHorizontal: 10
    }
})

export default NormalOrder