import React from 'react';
import { Stack } from 'expo-router';

const HomeLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="Index" options={{ 
        title: "small"
       }} />
      <Stack.Screen name="Settingscreen" options={{ 
        title: "small"
       }} />
    </Stack>
  );
};

export default HomeLayout;