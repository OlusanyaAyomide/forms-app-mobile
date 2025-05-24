import { View, Text } from '@/src/components/Themed';
import Image from '@/src/components/Themed';
import { LinearGradient } from 'expo-linear-gradient';
import { imageLinks } from '@/src/components/assests/imageLinks';
import { ScrollView } from 'react-native';
import HomeStatBox from '@/src/components/HomeStatBox';

export default function Home() {
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
        { label: 'Quizzes', value: '75', color: 'green' as 'green' },
      ],
    },
  ];

  return (
    <View className="flex flex-1">
      {/* Wrapper to control image and gradient overlay */}
      <View className="relative w-full h-[280px] rounded-b-[15%] overflow-hidden">
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
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 16 }}>
            {statData.map((stat, index) => (
              <HomeStatBox key={index} title={stat.title} subtitle={stat.subtitle} />
            ))}
          </ScrollView>
        </LinearGradient>
      </View>
      {/* Other content below the image section */}
      <View className="p-4">
        <Text className="text-black">hello</Text>
      </View>
    </View>
  );
}
