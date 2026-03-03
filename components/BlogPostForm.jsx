import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  return (
    <View>
      <Text style={style.label}>Enter Title:</Text>
      <TextInput style={style.input} value={title} onChangeText={setTitle} />
      <Text style={style.label}>Enter Content:</Text>
      <TextInput
        style={style.input}
        value={content}
        onChangeText={setContent}
      />
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
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

export default BlogPostForm;
