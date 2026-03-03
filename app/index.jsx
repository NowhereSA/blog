import { Feather } from "@expo/vector-icons";
import { Stack, useNavigation } from "expo-router";
import { useContext } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Context as BlogContext } from "../context/blogContext";

const index = () => {
  const { state, deleteBlogPost } = useContext(BlogContext);
  const navigation = useNavigation();
  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("create")}
              style={{ marginRight: 15 }}
            >
              <Feather name="plus" size={30} />
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView>
        <FlatList
          data={state}
          // keyExtractor={(state) => state.title}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("show", { id: item.id })}
              >
                <View style={style.row}>
                  <Text style={style.title}>{item.title}</Text>
                  <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                    <Feather name="trash" size={24} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </>
  );
};

const style = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
});
export default index;
