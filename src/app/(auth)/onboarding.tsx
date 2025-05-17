import React from 'react';


import Image, { View, Text, SafeAreaView } from '@/src/components/Themed';
import { Link } from 'expo-router';

import { imageLinks } from '@/src/components/assests/imageLinks';
import { useColorScheme } from 'react-native';


export default function OnBoarding({ path }: { path: string }) {

  const theme = useColorScheme();

  return (
    <SafeAreaView>
      <Text>OnBoarding First Page</Text>
      <Image
        uri={imageLinks.onBoardingScreenLogIn}
        className='w-full h-[60vh]'
        alt='no-image'
      />
      <Link href="/safe-guard">
        To SafeGuard
      </Link>
    </SafeAreaView>
  );
}