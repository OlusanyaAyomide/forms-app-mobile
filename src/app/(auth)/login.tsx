import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '@/src/components/Themed';

export default function LogIn({ path }: { path: string }) {
  return (
    <SafeAreaView className='h-full'>
      <Text>Log In</Text>
    </SafeAreaView>
  );
}