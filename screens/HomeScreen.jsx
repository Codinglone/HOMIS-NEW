import { SafeAreaView, View, TouchableOpacity, StyleSheet, Text, ScrollView } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.titleView}>
        <Text style={styles.title}>WELCOME TO HO-MIS</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.touchable_one}
          onPress={() => navigation.navigate("Profile", { name: "Jane" })}
        >
          <Text style={styles.typography}>MY ACCOUNT</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity
          style={styles.touchable_two}
          onPress={() => navigation.navigate("Manager Account Login")}
        >
          <Text style={styles.typography}>MANAGER LOGIN</Text>
        </TouchableOpacity>
        
      </View>
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity
          style={styles.touchable_two}
          onPress={() => navigation.navigate("Kitchen Account Login")}
        >
          <Text style={styles.typography}>KITCHEN LOGIN</Text>
        </TouchableOpacity>
        
      </View>
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity
          style={styles.touchable_two}
          onPress={() => navigation.navigate("Drinks Account Login")}
        >
          <Text style={styles.typography}>DRINKS LOGIN</Text>
        </TouchableOpacity>
        
      </View>
      <View style={{ marginTop: 10 }}>
     
        <TouchableOpacity
          style={styles.touchable_three}
          onPress={() => navigation.navigate("View All Orders")}
        >
          <Text style={styles.typography}>VIEW ORDERS</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10 }}>

        <TouchableOpacity
          style={styles.touchable_four}
          onPress={() => navigation.navigate("Place New Order")}
        >
          <Text style={styles.typography}>PLACE ORDER</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#222831'
  },
  touchable_two: {
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222831"
  },
  touchable_three: {
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222831"
  },
  touchable_four: {
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222831"
  },
  title: {
    fontSize: 48,
    fontWeight: 900,
    color: '#fff',
  },
  typography: {
    fontSize: 48,
    color: "#fff",
    fontFamily: "sans-serif",
    fontWeight: 900,
  }
  
});

export default HomeScreen;
