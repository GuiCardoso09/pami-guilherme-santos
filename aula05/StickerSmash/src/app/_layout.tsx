import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack> {/*Base para navegar em diferentes telas do app. Android, uma pilha é animada sobre a tela atual,No IOS, é animada
  a partir da direita*/}
     <Stack.Screen name="index" options={{title: 'Menu'}}/> 
    <Stack.Screen name="about" options={{title: 'About'}}/>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>);
}
