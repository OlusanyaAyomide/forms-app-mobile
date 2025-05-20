import React, { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { cn } from '@/src/utils/cn';

const CustomHeader = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchPress = () => {
    setIsSearching(true);
  };

  const handleCancelPress = () => {
    setSearchQuery('');
    setIsSearching(false);
  };

  return (
    <View className={`flex-row items-center justify-between px-4 py-2 ${isSearching && "py-[13px]"} bg-primary`}>
      {isSearching ? (
        <View className="flex-row flex-1 items-center">
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search..."
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            className="flex-1 h-10 px-3 text-white border-b border-white"
            autoFocus
          />
          <Pressable
            onPress={handleCancelPress}
            className="ml-2 p-2"
          >
            <FontAwesome name="times" size={22} color="white" />
          </Pressable>
        </View>
      ) : (
        <>
          <Text className="text-white text-xl font-bold italic">
            Quizzerly
          </Text>

          <View className="flex-row items-center space-x-5">
            <Pressable onPress={handleSearchPress} className="p-2">
              <FontAwesome name="search" size={22} color="white" />
            </Pressable>

            <Pressable onPress={() => console.log('Sort pressed')} className="p-2">
              <FontAwesome name="sort" size={22} color="white" />
            </Pressable>

            <Pressable onPress={() => console.log('Sort pressed')} className="p-2">
              <FontAwesome name="bell" size={22} color="white" />
            </Pressable>

            <Pressable onPress={() => console.log('Profile pressed')} className="p-2">
              <View className="w-9 h-9 rounded-full bg-orange-200 items-center justify-center">
                <Text>A</Text>
              </View>
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
};

export default CustomHeader;
