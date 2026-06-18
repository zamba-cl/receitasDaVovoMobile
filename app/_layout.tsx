import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useFonts } from 'expo-font';


export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  
  const [fontsLoaded] = useFonts({
    fontVovo: require("../assets/fonts/Letravovo-Regular.ttf"),
  })

  return (
    <>
      <Stack screenOptions={{contentStyle:{backgroundColor: '#fffaf0'}, headerShown: false,}}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
