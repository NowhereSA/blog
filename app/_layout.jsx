import { Stack } from "expo-router";
import { Provider } from "../context/blogContext";

export default function RootLayout() {
  return (
    <Provider>
      <Stack>
        <Stack.Screen name="index" options={{ headerTitle: "Blogs" }} />
        <Stack.Screen name="show" options={{ headerTitle: "Blogs" }} />
        <Stack.Screen name="create" options={{ headerTitle: "Blogs" }} />
        <Stack.Screen name="edit" options={{ headerTitle: "Blogs" }} />
      </Stack>
    </Provider>
  );
}
