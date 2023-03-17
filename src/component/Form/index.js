import React from "react";
import { Button , View , Text , TextInput} from "react-native";
import Resultimc from "./Resultimc";

function Form(){
    return(
    <View>
        <View>
            <Text>Altura</Text>
            <TextInput 
            placeholder="Ex. 1.68"
            keyboardType="numeric"
            />

            <Text>Peso</Text>
            <TextInput
            placeholder="Ex. 68.0"
            keyboardType="numeric"/>
            <Button title="Calcular IMC"/>
        </View>
        , <Resultimc messageResultimc={messageimc} resultimc={imc}/>
    </View>
        )
}
export default Form;