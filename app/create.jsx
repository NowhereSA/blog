import { useNavigation } from "expo-router";
import { useContext } from "react";
import { StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/blogContext";

const CreateScreen = () => {
  const navigation = useNavigation();

  const { addBlogPost } = useContext(Context);
  const handleSubmit = (title, content) => {
    // add blog with a callback
    addBlogPost(title, content, () => {
      // Redirect
      navigation.navigate("index");
    });
  };
  return (
    <>
      <BlogPostForm
        onSubmit={handleSubmit}
        initialValues={{ title: "", content: "" }}
      />
    </>
  );
};

const style = StyleSheet.create({});
export default CreateScreen;
