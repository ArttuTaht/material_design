import Login from "./screens/login";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <Login />
    </PaperProvider>
  );
}