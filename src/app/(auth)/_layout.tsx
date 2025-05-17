import { View } from '@/src/components/Themed';
import { Stack } from 'expo-router';
import { StyleSheet } from 'nativewind';


export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    />
  );
}
