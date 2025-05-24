import React from 'react';
import { View, Text } from '@/src/components/Themed';
import { FontAwesome } from '@expo/vector-icons';
import { cn } from '@/src/utils/cn';

interface HomeActionCardProps {
  title: string;
  content: string;
  iconName: keyof typeof FontAwesome.glyphMap;
}

const HomeActionCard: React.FC<HomeActionCardProps> = ({ title, content, iconName }) => {
  return (
    <View className="w-[100vw] bg-transparent p-4">
      <View className="flex-row items-center mb-2 bg-transparent">
        <FontAwesome name={iconName} size={24} color="#690896" className="mr-2" />
        <Text className="text-lg text-light-text font-bold">{title}</Text>
      </View>
      <Text className="text-sm opacity-80 text-light-text">{content}</Text>
    </View>
  );
};

export default HomeActionCard;
