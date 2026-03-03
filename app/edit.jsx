import { useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { useContext } from "react";
import { StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context as BlogPost } from "../context/blogContext";

const EditScreen = () => {
  // Navigate
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;

  // Get blog
  const { state, editBlogPost } = useContext(BlogPost);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  // Verify if blog exist
  if (!blogPost) {
    return navigation.navigate("index");
  }
  const handleSubmit = (title, content) => {
    editBlogPost(id, title, content, () => {
      navigation.pop();
    });
  };

  return (
    <>
      <BlogPostForm
        onSubmit={handleSubmit}
        initialValues={{ title: blogPost.title, content: blogPost.content }}
      />
    </>
  );
};

const style = StyleSheet.create({
  input: {
    borderColor: "gray",
    borderWidth: 1,
    fontSize: 18,
    marginBottom: 5,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});
export default EditScreen;
