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
          MY ACCOUNT
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity
          style={styles.touchable_two}
          onPress={() => navigation.navigate("Login")}
        >
          MANAGER LOGIN
        </TouchableOpacity>
        
      </View>
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity
          style={styles.touchable_two}
          onPress={() => navigation.navigate("Login")}
        >
          KITCHEN LOGIN
        </TouchableOpacity>
        
      </View>
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity
          style={styles.touchable_two}
          onPress={() => navigation.navigate("Login")}
        >
          DRINKS LOGIN
        </TouchableOpacity>
        
      </View>
      <View style={{ marginTop: 10 }}>
     
        <TouchableOpacity
          style={styles.touchable_three}
          onPress={() => navigation.navigate("Users")}
        >
          VIEW ORDERS
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10 }}>

        <TouchableOpacity
          style={styles.touchable_four}
          onPress={() => navigation.navigate("SMS")}
        >
          PLACE ORDER
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleView: {
    height: '10vh',
    backgroundColor: '#00ADB5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: "0.7rem"
  },
  touchable: {
    height: "200px",
    fontSize: "48px",
    color: "#fff",
    fontFamily: "sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "900",
  },
  touchable_one: {
    height: "10vh",
    fontSize: "2.2rem",
    color: "#fff",
    fontFamily: "sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "900",
    backgroundColor: '#222831'
  },
  touchable_two: {
    height: "10vh",
    fontSize: "2.2rem",
    color: "#fff",
    fontFamily: "sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "900",
    backgroundColor: '#222831'
  },
  touchable_three: {
    height: "10vh",
    fontSize: "2.2rem",
    color: "#fff",
    fontFamily: "sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "900",
    backgroundColor: '#222831'
  },
  touchable_four: {
    height: "10vh",
    fontSize: "2.2rem",
    color: "#fff",
    fontFamily: "sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "900",
    backgroundColor: '#222831'
  },
  title: {
    fontSize: '48px',
    fontWeight: 900,
    color: '#fff',
  },
  
});

export default HomeScreen;
