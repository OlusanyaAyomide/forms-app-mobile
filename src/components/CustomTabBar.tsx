import React from 'react';
import { Pressable } from 'react-native';
import { View, Text } from './Themed';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Link } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { cn } from '@/src/utils/cn';
import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/components/useColorScheme';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} className="-mb-[3px]" {...props} />;
}

const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const colorScheme = useColorScheme();

  // Define the order of the tabs to display in the custom bar
  const tabOrder = ['index', 'quiz', 'modal', 'form', 'members'];

  const getIconName = (routeName: string): React.ComponentProps<typeof FontAwesome>['name'] => {
    switch (routeName) {
      case 'index':
        return 'home';
      case 'quiz':
        return 'book';
      case 'form':
        return 'wpforms';
      case 'members':
        return 'users';
      case 'modal':
        return 'plus';
      default:
        return 'code';
    }
  };

  return (
    <View className="flex-row border-t-gray-200 dark:border-t-gray-700 pt-2 border pb-8">
      {tabOrder.map((routeName, index) => {
        const route = state.routes.find(r => r.name === routeName);
        if (!route) return null; // Should not happen if tabOrder matches defined screens

        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === state.routes.findIndex(r => r.name === routeName);

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
          const onPlusButtonPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!event.defaultPrevented) {
              // Navigate specifically to the modal route
              navigation.navigate('modal');
            }
          };

          return (
            <View key={route.key} className="flex-1 items-center justify-center -mt-10">
              <Pressable
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPlusButtonPress} // Use the specific handler for the plus button
                onLongPress={onLongPress}
                className={cn(
                  'w-16 h-16 rounded-full shadow items-center justify-center',
                  'bg-primary'
                )}
                style={{
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
              >
                <FontAwesome
                  color='white'
                  name='plus'
                  size={20}
                />
              </Pressable>
            </View>
          );
        }

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
              color={isFocused ? Colors.primary : Colors[colorScheme ?? 'light'].tint}

            />
            <Text className='mt-1' style={{ color: isFocused ? Colors.primary : Colors[colorScheme ?? 'light'].text }}>
              {label as string}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
