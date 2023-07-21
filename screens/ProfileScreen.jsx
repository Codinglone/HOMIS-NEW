import { Text, Image, View, StyleSheet, SafeAreaView } from "react-native";

const ProfileScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView>
    <View style={styled.profile}>
      <Text style={{ color: "white" }}>
        This is {route.params.name}'s account
      </Text>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        }}
        style={{height: 200, width: '100%', marginTop: 40}}
      />
    </View>
    </SafeAreaView>
  );
};

const styled = StyleSheet.create({
  profile: {
    backgroundColor: "teal",
  },
});

export default ProfileScreen;
