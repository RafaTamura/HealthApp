import { View } from "react-native";
import Form from "./src/component/Form";
import ResultImc from "./src/component/Form/ResultImc";
import Titulo from "./src/component/titulo";

function App() {
  return (
    <View>
      <Titulo/>
      <Form/>
      <ResultImc/>
    </View>
    );
}
export default App

