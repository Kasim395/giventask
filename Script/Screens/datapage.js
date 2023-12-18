import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, TextInput } from "react-native";

const YourComponent = () => {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();
        const postsData = data.posts || [];
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.body}</Text>
      <Text style={styles.userId}>User ID: {item.userId}</Text>
      <Text style={styles.tags}>Tags: {item.tags.join(", ")}</Text>
      <Text style={styles.reactions}>Reactions: {item.reactions}</Text>
    </View>
  );

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        placeholder="Search by title..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />

      <FlatList
        data={filteredPosts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCard}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#E1D9D1",
  },
  searchBox: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    backgroundColor: "white",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  userId: {
    color: "#555",
    marginTop: 8,
  },
  tags: {
    color: "#555",
    marginTop: 4,
  },
  reactions: {
    color: "#555",
    marginTop: 4,
  },
});

export default YourComponent;
