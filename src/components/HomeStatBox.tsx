import React from 'react';
import { View, Text } from '@/src/components/Themed';
import { cn } from '@/src/utils/cn';

interface HomeStatBoxProps {
  title: string;
  subtitle: { label: string; value: string; color: 'yellow' | 'red' | 'green' }[];
  // TODO: Add prop for logo source
}

const HomeStatBox: React.FC<HomeStatBoxProps> = ({ title, subtitle }) => {
  return (
    <View className="w-[180px] h-24 bg-white rounded-lg shadow-md p-4 pb-6 mr-4">
      {/* TODO: Add Logo */}
      <Text className="text-base font-bold mb-2">{title}</Text>
      <View className='flex flex-row gap-1 flex-wrap'>
        {subtitle.map((item, index) => (
          <Text key={index} className={cn(
            'text-sm',
            item.color === 'yellow' && 'text-yellow-500',
            item.color === 'red' && 'text-red-500',
            item.color === 'green' && 'text-green-500'
          )}>
            {item.label}: {item.value}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default HomeStatBox;
