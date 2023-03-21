import React from "react";
import { View , StyleSheet} from "react-native";
import Form from "./src/component/Form";
import Titulo from "./src/component/titulo";


function App() {
  return (
    <View style={styles.container}>
     <Titulo/>
      <Form/>
    </View>
    );
  }

    const styles = StyleSheet.create({
      container:{
        flex: 1,
        backgroundColor: "#e0e5e5",
        paddingTop: 80,
      },

    })
export default App

