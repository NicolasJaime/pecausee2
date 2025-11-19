import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const screenWidth = Dimensions.get('window').width;

const settingsOptions = [
  'Configuración',
  'Tu actividad',
  'Guardado',
  'Apariencia',
  'Reportar un problema',
  'Music Premium',
  'Cambiar de cuenta',
];

export default function Settingscreen() {
  const router = useRouter();

  return (
    <View
      style={{ width: screenWidth }}
      className="flex-1 bg-pink-100 px-6 pt-10"
    >
      <Text className="text-2xl font-bold text-red-600 mb-6 text-center">
        ⚙️ Ajustes
      </Text>

      <View className="flex-1">
        {settingsOptions.map((option) => (
          <TouchableOpacity
            key={option}
            className="bg-orange-50 py-4 px-5 rounded-xl mb-3"
          >
            <Text className="text-lg text-gray-800 font-medium">{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        className="bg-red-600 py-5 rounded-xl items-center mb-6"
        onPress={() => router.replace('/')}
      >
        <Text className="text-lg text-white font-bold">🚪 Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}
