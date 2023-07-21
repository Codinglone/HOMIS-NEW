import React, { useState, useEffect } from "react";
import { Text, View, FlatList, StyleSheet, ScrollView, Image } from "react-native";
import axios from "axios";

const DataScreen = () => {
  const [data, setData] = useState([]);
  const [photos, setPhotos] = useState([]);
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

    try {
      const response = await axios.get(url);
      setPhotos(response.data);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchPhotos();
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
          photos.map((photo) => (
            <Image key={photo.id} source={{ uri: photo.url }} style={styles.image} />
          ))
        ) : (
          <Text>Loading photos...</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontWeight: "400",
    fontSize: 18,
    paddingVertical: 4,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
});

export default DataScreen;

