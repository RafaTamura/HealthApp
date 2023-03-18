import React from "react";
import { Text, View } from "react-native";
 
function ResultImc(props) {
  return (
    <View>
      <Text>
        {props.messageResultIMc}
      </Text>
      <Text>
        {props.resultImc}
      </Text>
    </View>
  );
}
export default ResultImc;