import { SafeAreaView, View } from "react-native";
import { Button } from "@react-native-material/core"

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
        <View>
      <Button
        title="Go to Jane's Profile"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      />
      </View>
      <View style={{marginTop: 10}}>
      <Button 
        title="Login To Your Account"
        onPress={() => navigation.navigate("Login")}
        style={{backgroundColor: 'teal'}}
      />
      </View>
      <View style={{marginTop: 10}}>
      <Button 
        title="View all users"
        onPress={() => navigation.navigate("Users")}
        style={{backgroundColor: 'blue'}}
      />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
