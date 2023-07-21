import { SafeAreaView, View } from "react-native";
import { Button } from "@react-native-material/core"

const HomeScreen = ({ navigation }) => {
  return (
        <View style={{backgroundColor: 'teal'}}>
      <Button
        title="Go to Jane's Profile"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      />
      </View>
  );
};

export default HomeScreen;
