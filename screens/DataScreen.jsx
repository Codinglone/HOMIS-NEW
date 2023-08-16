// import React, { useState, useEffect } from "react";
// import { Text, View, FlatList, StyleSheet, ScrollView, Image } from "react-native";
// import axios from "axios";
// import { getOrders } from "../firebase";
// const DataScreen = async () => {
//   const [data, setData] = useState([]);
//   const [photos, setPhotos] = useState([]);
//   const baseUrl = "https://jsonplaceholder.typicode.com";

//   const fetchUser = async () => {
//     const url = `${baseUrl}/users`;
//     try {
//       const response = await axios.get(url);
//       setData(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const fetchPhotos = async () => {
//     const url = `${baseUrl}/photos`;
//     const params = {
//       _limit: 4, // Limit the number of photos fetched to 4
//     };

//     try {
//       const response = await axios.get(url, { params });
//       setPhotos(response.data);
//     } catch (error) {
//       console.error("Error fetching photos:", error);
//     }
//   };

//   useEffect(() => {
//     fetchUser();
//     fetchPhotos();
//   }, []);

//   const getOrdersList = async () => {
//     const orders = await getOrders()
//     return orders
//   }
//   const orders = await getOrdersList()
//   console.log(orders);
//   return (
//     <View>
//       {data.length > 0 ? (
//         <FlatList
//           data={data}
//           renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
//           keyExtractor={(item) => item.id.toString()}
//         />
//       ) : (
//         <Text>Loading...</Text>
//       )}

//       <ScrollView>
//         {photos.length > 0 ? (
//           photos.slice(0, 4).map((photo) => (
//             <Image key={photo.id} source={{ uri: photo.url }} style={styles.image} />
//           ))
//         ) : (
//           <Text>Loading photos...</Text>
//         )}
//       </ScrollView>
//       <ScrollView>
//         {orders.map(order => (
//           <Text>{order.name}</Text>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   item: {
//     fontWeight: 400,
//     fontSize: 18,
//     paddingVertical: 4,
//     textAlign: "center",
//   },
//   image: {
//     width: 100,
//     height: 200,
//   },
// });

// export default DataScreen;

import React, { useState, useEffect } from "react";
import { Text, View, FlatList, StyleSheet, ScrollView, Image } from "react-native";
import axios from "axios";
import { getOrders } from "../firebase"; // Assuming this import is correct

const DataScreen = () => {
  const [data, setData] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [orders, setOrders] = useState([]); // State for orders

  const baseUrl = "https://jsonplaceholder.typicode.com";

  const fetchUser = async () => {
    const url = `${baseUrl}/users`;
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchPhotos = async () => {
    const url = `${baseUrl}/photos`;
    const params = {
      _limit: 4, // Limit the number of photos fetched to 4
    };

    try {
      const response = await axios.get(url, { params });
      setPhotos(response.data);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  const fetchOrders = async () => {
    try {
      const ordersData = await getOrders();
      setOrders(ordersData);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchPhotos();
    fetchOrders(); // Fetch orders when component mounts
  }, []);

  return (
    <View>
      {data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text>Loading...</Text>
      )}

      <ScrollView>
        {photos.length > 0 ? (
          photos.slice(0, 4).map((photo) => (
            <Image key={photo.id} source={{ uri: photo.url }} style={styles.image} />
          ))
        ) : (
          <Text>Loading photos...</Text>
        )}
      </ScrollView>
      <ScrollView>
        {orders.length > 0 ? (
          orders.map(order => (
            <Text key={order.id}>{order.name}</Text>
          ))
        ) : (
          <Text>Loading orders...</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontWeight: "400", // Changed to string value
    fontSize: 18,
    paddingVertical: 4,
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 200,
  },
});

export default DataScreen;
