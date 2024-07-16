import Botao from "@/components/Botao";
import styles from "@/constants/style";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { Text, View } from "react-native";

export default function TelaInicial() {
  const nav=useNavigation()
  return (
    <View style={styles.centralizado} >
      <Ionicons name="logo-react" size={100} color={"#3a98ff"} />
      <View style={{ alignItems: "center" }} >
        <Text style={{ fontSize: 20, fontWeight: 500 }} >MasterClass React Native</Text>
        <Text style={{ fontSize: 16, fontWeight: 300 }} >Formação Dev</Text>
      </View>
      <Botao  onPress={()=>nav.dispatch(DrawerActions.openDrawer())} >
        <Text  style={{color:"#fff"}} >Open Drawer</Text>
      </Botao>

    </View>
  );
}
