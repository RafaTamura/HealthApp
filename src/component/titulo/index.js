import React from "react";
import styles from "./style";
import { View , Text } from "react-native";



function Titulo(){
    return(
        <View style={styles.boxTitle}>
            <Text style = {styles.textTitle}>
            <h1>Health</h1>
            </Text>
        </View>
    )
}
export default Titulo;