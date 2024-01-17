import React from 'react';
import { Stack } from 'expo-router';
import Colors from '@/constants/Colors';

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTitle: 'Home',
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
    </Stack>
  );
};

export default RootLayout;
