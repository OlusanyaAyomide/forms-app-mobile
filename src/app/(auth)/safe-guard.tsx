import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '@/src/components/Themed';
import { Link } from 'expo-router';


export default function SafeGuard({ path }: { path: string }) {
  return (
    <SafeAreaView className='h-full'>
      <Text>OnBoarding Second Page</Text>
      <Link href="/login">To logIn</Link>
      <Link href="/onboarding">To OnBoarding</Link>
    </SafeAreaView>
  );
}