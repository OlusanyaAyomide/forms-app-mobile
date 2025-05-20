import { View, Text } from '@/src/components/Themed';


export default function Quiz() {

  return (
    <View className="flex flex-1 items-center justify-center">
      <Text className="text-xl font-bold">Settings</Text>
      <View className="my-7 h-[1px] w-[80%] bg-black/10" />

    </View>
  );
}