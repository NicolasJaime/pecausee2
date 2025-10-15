import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeLayout() {
  return (
    <Tabs
  screenOptions={{
    tabBarStyle: {
      backgroundColor: '#ffe5e5',
    },
  }}
>
  <Tabs.Screen 
    name="HomeScreen"
    options={{
      title: 'DashBoard',
      tabBarIcon: ({ color, size }) => (
        <MaterialIcons name="dashboard" color={color} size={size} />
      ),
    }}
  />
  <Tabs.Screen
    name="Settingscreen"
    options={{
      title: 'Configuración',
      tabBarIcon: ({ color, size }) => (
        <MaterialIcons name="settings" color={color} size={size} />
      ),
    }}
  />
</Tabs>
  );
}