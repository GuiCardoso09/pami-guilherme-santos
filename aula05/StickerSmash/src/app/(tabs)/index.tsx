import { Link } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";
{/*Importação de componente de expo-router*/}

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
      <Link href="/about" style={styles.button}>{/* Texto de exibição*/}
        Go to About screen
        </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: '#ffffff',
    alignItems: "center",
    justifyContent: "center",
  },
   text: {
    color: '#000000',
  },
 button: { 
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#181717',
  },  
});{/* Adição de style do botão de troca de telas*/}