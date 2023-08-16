import React from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useEffect, useState } from "react";
import food from "../assets/food.jpg";
import beverage from "../assets/beverage.jpg";

const NormalOrder = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={food}
        resizeMode="cover"
        style={styles.imageBack}
      >
        <View style={styles.overlay} />
        <Text style={{ color: "#FCFFE7", fontSize: 32, fontWeight: "900" }}>
        FOODS & SNACKS
        </Text>
      </ImageBackground>
      <ImageBackground
        source={beverage}
        resizeMode="cover"
        style={styles.imageBack}
      >
        <View style={styles.overlay} />
        <Text style={{ color: "#FCFFE7", fontSize: 32, fontWeight: "900" }}>
          DRINKS & BEVERAGES
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingHorizontal: 10,
  },
  imageBack: {
    height: 240,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 24,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
});

export default NormalOrder;
