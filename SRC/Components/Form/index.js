import React, {useState}from "react";
import { View,Text, TextInput, Button} from "react-native";

 export default function Form(){

    const[height,setHeight]=useState(null)
    const[weight,setWeight]=useState(null)
    const[messageImc,setMessageImc]=useState("Informe seu peso e altura");
    const[imc,setImc]=useState(null)
    const[textButton,seTextButton]=useState("IMC")

    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }

    function validationImc(){
    if (weight!= null && height != null ){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("SEU IMC É =")
        setTextButton("CALCULAR NOVAMENTE")
        return
    }

        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha peso e altura")
    }

    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }

    

    return (
        <View>
            <View>
                <Text>Altura</Text>
           <TextInput
            placeholder="Ex.1.75"
           keyboardType="numeric"
           />



           <Text>Peso</Text>
           <TextInput
            placeholder="Ex.85.76"
           keyboardType="numeric"
           />

         <Button
         title={textButton}
         
         />
         
            </View>
        </View>
    );
 }