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

const NormalOrder = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ImageBackground source={food} resizeMode="cover" style={styles.imageBack}>
            <Text>FOODS & BEVERAGES</Text>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingHorizontal: 10,
  },
  imageBack: {
    height: 200,
    
  },
  imageText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: 900,
  }
});

export default NormalOrder;
