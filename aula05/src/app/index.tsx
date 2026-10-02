//AQUI é o html do projeto
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return ( /*Front End:class == style
    Para você definir um onjeto, vc coloca style.nome_obj*/ 
    <View style={styles.container}>
      <Text>Olá Mundo!
      </Text>
    </View>
  );
}
/*wdfhiuwgfi8uwehf */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
