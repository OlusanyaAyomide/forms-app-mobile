import React from 'react';
import { Tabs, Redirect } from 'expo-router';

import { useColorScheme } from '@/src/components/useColorScheme';
import { useClientOnlyValue } from '@/src/components/useClientOnlyValue';
import CustomTabBar from '@/src/components/CustomTabBar'; // Import the custom tab bar

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const isFirstLogIn = false; // Keep your existing auth logic
  const isLoggedIn = true; // Keep your existing auth logic

  if (isFirstLogIn) {
    return <Redirect href={"/onboarding"} />;
  } else if (!isLoggedIn) {
    return <Redirect href={"/login"} />;
  }

  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />} // Use the custom tab bar
      screenOptions={{
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="quiz"
        options={{
          title: 'Quiz',
        }}
      />
      <Tabs.Screen
        name="modal"
        options={{
          title: 'Add New',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="form"
        options={{
          title: 'Form',
        }}
      />
      <Tabs.Screen
        name="members"
        options={{
          title: 'Members',
        }}
      />
    </Tabs>
  );
}


//https://gist.github.com/OlusanyaAyomide/8c22e2df7b27bd42b0526ed136f40832