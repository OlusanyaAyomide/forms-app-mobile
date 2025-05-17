import React from 'react';
import { View, Text, SafeAreaView } from '@/src/components/Themed';
import Image from '@/src/components/Themed';
import { cn } from '@/src/utils/cn';

interface AuthLayoutProps {
  children: React.ReactNode;
  imageSource: string;
  title: string;
  subtitle: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, imageSource, title, subtitle }) => {
  return (
    <SafeAreaView className='px-0'>
      <View className="flex-1 relative">
        <Image
          uri={imageSource}
          className="w-full h-[30vh]"
          alt="auth-image"
        />
        <View className='absolute bg-transparent top-[9%] left-7'>
          <Text className="text-4xl font-bold text-center mb-2 text-dark-text">{title}</Text>
          <Text className="text-lg text-center mt-2 opacity-70 text-dark-text">{subtitle}</Text>
        </View>
        <View className="flex-1 px-2 py-2 pt-20 -mt-8 rounded-t-2xl">
          {children}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthLayout;
