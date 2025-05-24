import React, { useRef, useState } from 'react';
import { View, Text } from '@/src/components/Themed';
import Image from '@/src/components/Themed';
import { LinearGradient } from 'expo-linear-gradient';
import { imageLinks } from '@/src/components/assests/imageLinks';
import { ScrollView, TouchableOpacity, NativeSyntheticEvent, NativeScrollEvent, Dimensions, LayoutChangeEvent } from 'react-native';
import HomeStatBox from '@/src/components/HomeStatBox';
import HomeActionCard from '@/src/components/HomeActionCard';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '@/src/constants/Colors';
import { cn } from '@/src/utils/cn';

const { width: screenWidth } = Dimensions.get('window');

export default function Home() {
  const statScrollViewRef = useRef<ScrollView>(null);
  const actionScrollViewRef = useRef<ScrollView>(null);
  const [statScrollPosition, setStatScrollPosition] = useState(0);
  const [statContentWidth, setStatContentWidth] = useState(0);
  const [statScrollViewWidth, setStatScrollViewWidth] = useState(0);
  const [actionScrollPosition, setActionScrollPosition] = useState(0);
  const [actionContentWidth, setActionContentWidth] = useState(0);
  const [actionScrollViewWidth, setActionScrollViewWidth] = useState(0);

  const statData = [
    {
      title: 'Total Quiz',
      subtitle: [
        { label: 'Open', value: '10', color: 'green' as 'green' },
        { label: 'Closed', value: '5', color: 'red' as 'red' },
        { label: 'Drafts', value: '3', color: 'yellow' as 'yellow' },
      ],
    },
    {
      title: 'Total Participants',
      subtitle: [
        { label: 'Active', value: '100', color: 'green' as 'green' },
        { label: 'Inactive', value: '20', color: 'red' as 'red' },
      ],
    },
    {
      title: 'Flagged Questions',
      subtitle: [
        { label: 'Resolved', value: '15', color: 'green' as 'green' },
        { label: 'Unresolved', value: '5', color: 'red' as 'red' },
      ],
    },
    {
      title: 'Total Responses',
      subtitle: [
        { label: 'Forms', value: '50', color: 'green' as 'green' },
        { label: 'Quizzes', value: '75', color: 'yellow' as 'yellow' },
      ],
    },
  ];

  const actionCardData = [
    {
      title: 'Start Creating Form',
      content: 'start creating form for your students, Click to create',
      iconName: 'pencil' as keyof typeof FontAwesome.glyphMap,
    },
    {
      title: 'Manage participants',
      content: 'View who is taking your quiz. Click here to get started',
      iconName: 'users' as keyof typeof FontAwesome.glyphMap, // Placeholder icon
    },
    {
      title: 'View Analytics',
      content: 'Check out our comprehensive report on your quiz',
      iconName: 'bar-chart' as keyof typeof FontAwesome.glyphMap, // Placeholder icon
    },
  ];

  const handleStatScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setStatScrollPosition(event.nativeEvent.contentOffset.x);
  };

  const handleStatContentLayout = (width: number) => {
    setStatContentWidth(width);
  };

  const handleStatScrollViewLayout = (event: LayoutChangeEvent) => {
    const layout = event?.nativeEvent?.layout;
    if (layout) {
      setStatScrollViewWidth(layout.width);
    }
  };

  const handleActionScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setActionScrollPosition(event.nativeEvent.contentOffset.x);
  };

  const handleActionContentLayout = (width: number) => {
    setActionContentWidth(width);
  };

  const handleActionScrollViewLayout = (event: LayoutChangeEvent) => {
    const layout = event?.nativeEvent?.layout;
    if (layout) {
      setActionScrollViewWidth(layout.width);
    }
  };

  const scrollToStat = (direction: 'left' | 'right') => {
    if (statScrollViewRef.current) {
      const scrollAmount = 200; // Adjust this value based on your item width and spacing
      const newScrollPosition =
        direction === 'right'
          ? statScrollPosition + scrollAmount
          : statScrollPosition - scrollAmount;

      statScrollViewRef.current.scrollTo({
        x: newScrollPosition,
        animated: true,
      });
    }
  };

  const scrollToCard = (index: number) => {
    if (actionScrollViewRef.current) {
      const cardWidth = actionScrollViewWidth
      actionScrollViewRef.current.scrollTo({
        x: index * cardWidth,
        animated: true,
      });
    }
  };

  const showLeftStatArrow = statScrollPosition > 0;
  const showRightStatArrow = statScrollPosition < statContentWidth - statScrollViewWidth;

  const activeCardIndex = Math.round(actionScrollPosition / (actionScrollViewWidth * 0.85 + 16)); // Calculate active card index

  return (
    <View className="flex flex-1">
      {/* Wrapper to control image and gradient overlay */}
      <View className="relative w-full h-[270px] rounded-b-[20px] overflow-hidden">
        {/* Background Image */}
        <Image uri={imageLinks.homeGradient} className="w-full h-full" />

        {/* Gradient overlay using style instead of className */}
        <LinearGradient
          colors={['rgba(105, 8, 150, 1)', 'rgba(105, 8, 150, 0)']}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 280, // Adjusted height to cover the image section
            zIndex: 10,
            justifyContent: 'flex-start',
            padding: 16,
          }}
        >
          <View className='my-10 flex-row bg-transparent justify-between'>
            <View className='gap-1 bg-transparent text-white font-bold'>
              <Text className='text-4xl font-semibold text-white'>
                3000
              </Text>
              <Text className='text-sm text-white'>Form Responses</Text>
            </View>
            <View className='gap-1 bg-transparent text-white font-bold'>
              <Text className='text-4xl font-semibold text-white'>
                240
              </Text>
              <Text className='text-sm text-white'>Participants</Text>
            </View>
          </View>
          {/* Stat Boxes Carousel */}
          <View className="relative bg-transparent">
            <ScrollView
              ref={statScrollViewRef}
              horizontal
              showsHorizontalScrollIndicator={false}
              // contentContainerStyle={{ paddingRight: 4 }}
              onScroll={handleStatScroll}
              onContentSizeChange={handleStatContentLayout}
              onLayout={handleStatScrollViewLayout}
              scrollEventThrottle={16}
            // className='bg-transparent'
            >
              {statData.map((stat, index) => (
                <HomeStatBox key={index} title={stat.title} subtitle={stat.subtitle} />
              ))}
            </ScrollView>
            {showLeftStatArrow && (
              <TouchableOpacity
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 rounded-full p-2 z-20"
                onPress={() => scrollToStat('left')}
              >
                <FontAwesome name="chevron-left" size={20} color="white" />
              </TouchableOpacity>
            )}
            {showRightStatArrow && (
              <TouchableOpacity
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 rounded-full p-2 z-20"
                onPress={() => scrollToStat('right')}
              >
                <FontAwesome name="chevron-right" size={20} color="white" />
              </TouchableOpacity>
            )}
          </View>
        </LinearGradient>
      </View>
      {/* Action Cards Section */}
      <View className="mx-2 mt-4 py-1 rounded-lg bg-[#ffeeeb]">
        <ScrollView
          ref={actionScrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={handleActionScroll}
          onContentSizeChange={handleActionContentLayout}
          onLayout={handleActionScrollViewLayout}
          scrollEventThrottle={16}
        // contentContainerStyle={{ paddingRight: screenWidth * 0.15 }} // Show half of the next card
        >
          {actionCardData.map((card, index) => (
            <HomeActionCard key={index} title={card.title} content={card.content} iconName={card.iconName} />
          ))}
        </ScrollView>
      </View>
      {/* Dot Indicators */}
      <View className="flex-row justify-center bg-transparent mt-4">
        {actionCardData.map((_, index) => (
          <TouchableOpacity key={index} onPress={() => scrollToCard(index)}>
            <View
              className={cn(
                "h-2 w-2 rounded-full mx-1",
                index === activeCardIndex ? 'bg-primary' : 'bg-gray-400'
              )}
            />
          </TouchableOpacity>
        ))}
      </View>
      {/* Other content below the image section */}
      <View className="p-4">
        <Text className="text-black">hello</Text>
      </View>
    </View>
  );
}
