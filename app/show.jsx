import { EvilIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { Stack, useNavigation } from "expo-router";
import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Context as BlogContext } from "../context/blogContext";

const ShowScreen = () => {
  // Navigate
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;

  // Get blog
  const { state } = useContext(BlogContext);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  // Verify if blog exist
  if (!blogPost) {
    return navigation.navigate("index");
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity
                style={{ padding: 15 }}
                onPress={() => navigation.navigate("edit", { id: blogPost.id })}
              >
                <EvilIcons name="pencil" size={35} />
              </TouchableOpacity>
            );
          },
        }}
      />
      <View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
      </View>
    </>
  );
};

const style = StyleSheet.create({});
export default ShowScreen;
