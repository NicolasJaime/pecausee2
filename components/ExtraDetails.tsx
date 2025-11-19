import React from 'react';
import { View } from 'react-native';
import { router } from 'expo-router';
import CustomButtons from '@/components/CustomButtons';

export default function ExtraDetails() {
  return (
    <View className="flex-1 w-full bg-pink-300 p-5 rounded-xl mt-5 justify-center gap-2.5">
      <View className="flex-row justify-center gap-2.5">
        <CustomButtons 
          title="Login 🔐"
          onPress={() => router.push('/(home)/HomeScreen')} // 👈 redirige al HomeScreen
        />
        <CustomButtons 
          title="Register 📝"
          onPress={() => router.push('/(home)/HomeScreen')} // 👈 también redirige al HomeScreen
        />
      </View>
    </View>
  );
}
