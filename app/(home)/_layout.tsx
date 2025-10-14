import React from 'react';
import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack >
      <Stack.Screen name="HomeScreen" />
      <Stack.Screen name="Settingscreen" />
    </Stack>
  );
}