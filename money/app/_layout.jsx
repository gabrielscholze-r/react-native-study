import { colors } from '@/constants/colors';
import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import 'react-native-reanimated';

export default function RootLayout() {

  return (
    <>
    <StatusBar backgroundColor={colors.primary} style="light"/>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
}
