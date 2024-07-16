import styles from "@/constants/style"
import { useState } from "react"
import { Text, View } from "react-native"


export interface ContadorProps{
    valorInicial?:number
}

export default function Contador(props:ContadorProps){

    const [numero,setNumero]=useState(props.valorInicial??0)


    return(
        <View style={styles.centralizado} >
            <Text>{numero}</Text>
        </View>
    )
}