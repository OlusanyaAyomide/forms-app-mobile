import React from 'react';
import { View, Text } from '@/src/components/Themed';
import { cn } from '@/src/utils/cn';

interface HomeStatBoxProps {
  title: string;
  subtitle: { label: string; value: string; color: 'yellow' | 'red' | 'green' | 'primary' }[];
  // TODO: Add prop for logo source
}

const HomeStatBox: React.FC<HomeStatBoxProps> = ({ title, subtitle }) => {
  return (
    <View className="w-[170px] h-28 bg-white rounded-lg shadow-md p-4 mr-4">
      {/* TODO: Add Logo */}
      <Text className="text-base font-bold mb-2 text-light-text">{title}</Text>
      <View className='flex flex-row gap-2 flex-wrap bg-white'>
        {subtitle.map((item, index) => (
          <Text key={index} className={cn(
            'text-sm',
            item.color === 'yellow' && 'text-yellow-500',
            item.color === 'red' && 'text-red-500',
            item.color === 'green' && 'text-green-500',
            item.color === "primary" && 'text-[#690896]'
          )}>
            {item.label}: {item.value}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default HomeStatBox;
