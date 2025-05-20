import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Link } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { cn } from '@/src/utils/cn';
import Colors from '@/src/constants/Colors'; // Assuming Colors is needed for tint color

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} className="-mb-[3px]" {...props} />;
}

const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const colorScheme = 'light'; // Assuming light mode for now, can integrate useColorScheme later if needed

  const getIconName = (routeName: string): React.ComponentProps<typeof FontAwesome>['name'] => {
    switch (routeName) {
      case 'index':
        return 'home'; // Example icon for Home
      case 'quiz':
        return 'question'; // Example icon for Quiz
      case 'form':
        return 'wpforms'; // Example icon for Form
      case 'participants':
        return 'users'; // Example icon for Participants
      case 'modal':
        return 'plus'; // Icon for the central plus button
      default:
        return 'code'; // Default icon
    }
  };

  return (
    <View className="flex-row bg-white border-t border-gray-200 pb-safe-area">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        // Handle the central plus button separately
        if (route.name === 'modal') {
          return (
            <View key={route.key} className="flex-1 items-center justify-center -mt-8">
              <Pressable
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                className={cn(
                  'w-16 h-16 rounded-full items-center justify-center',
                  'bg-blue-500' // Placeholder for bg-primary, will need to map Colors.tint to a Tailwind class or use inline style
                )}
                style={{
                  // Example inline style for floating effect, can refine with NativeWind if possible
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
              >
                <TabBarIcon
                  name={getIconName(route.name)}
                  color="white" // Assuming white icon on primary background
                />
              </Pressable>
            </View>
          );
        }

        // Render standard tabs
        return (
          <Pressable
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className="flex-1 items-center justify-center"
          >
            <TabBarIcon
              name={getIconName(route.name)}
              color={isFocused ? Colors[colorScheme].tint : Colors[colorScheme].text}
            />
            {/* Optional: Add label text */}
            {/* <Text style={{ color: isFocused ? Colors[colorScheme].tint : Colors[colorScheme].text }}>
              {label as string}
            </Text> */}
          </Pressable>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
