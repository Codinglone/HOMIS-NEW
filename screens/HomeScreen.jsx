import { SafeAreaView, View, TouchableOpacity, StyleSheet, Text } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.titleView}>
        <Text style={styles.title}>WELCOME TO HO-MIS</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.touchable_one}
          onPress={() => navigation.navigate("Profile", { name: "Jane" })}
        >
          <Text>MY ACCOUNT</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity
          style={styles.touchable_two}
          onPress={() => navigation.navigate("Manager Account Login")}
        >
          <Text>MANAGER LOGIN</Text>
        </TouchableOpacity>
        
      </View>
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity
          style={styles.touchable_two}
          onPress={() => navigation.navigate("Kitchen Account Login")}
        >
          <Text>KITCHEN LOGIN</Text>
        </TouchableOpacity>
        
      </View>
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity
          style={styles.touchable_two}
          onPress={() => navigation.navigate("Drinks Account Login")}
        >
          <Text>DRINKS LOGIN</Text>
        </TouchableOpacity>
        
      </View>
      <View style={{ marginTop: 10 }}>
     
        <TouchableOpacity
          style={styles.touchable_three}
          onPress={() => navigation.navigate("View All Orders")}
        >
          <Text>VIEW ORDERS</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10 }}>

        <TouchableOpacity
          style={styles.touchable_four}
          onPress={() => navigation.navigate("Place New Order")}
        >
          <Text>PLACE ORDER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleView: {
    height: 100,
    backgroundColor: "#00ADB5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  touchable: {
    height: 200,
    fontSize: 48,
    color: "#fff",
    fontFamily: "sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 900,
  },
  touchable_one: {
    height: 100,
    fontSize: 48,
    color: "#fff",
    fontFamily: "sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 900,
    backgroundColor: '#222831'
  },
  touchable_two: {
    height: 100,
    fontSize: 48,
    color: "#fff",
    fontFamily: "sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 900,
    backgroundColor: "#222831"
  },
  touchable_three: {
    height: 100,
    fontSize: 48,
    color: "#fff",
    fontFamily: "sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 900,
    backgroundColor: "#222831"
  },
  touchable_four: {
    height: 100,
    fontSize: 48,
    color: "#fff",
    fontFamily: "sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 900,
    backgroundColor: "#222831"
  },
  title: {
    fontSize: 48,
    fontWeight: 900,
    color: '#fff',
  },
  
});

export default HomeScreen;
