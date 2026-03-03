import { useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context as BlogContext } from "../context/blogContext";

const ShowScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;

  const { state } = useContext(BlogContext);

  const blogPost = state.find((blogPost) => blogPost.id === id);

  if (!blogPost) {
    return navigation.navigate("index");
  }
  return (
    <View>
      <Text>
        {blogPost.title} - {blogPost.id}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({});
export default ShowScreen;
