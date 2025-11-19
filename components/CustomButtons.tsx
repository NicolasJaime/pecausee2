import React from 'react';
import { TouchableOpacity, Text, View, ViewStyle } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  disabled?: boolean;  
}

export default function CustomButton({ title, onPress, style, disabled = false }: CustomButtonProps) {
  return (
    <View className="items-center justify-center mb-20">
      <TouchableOpacity
        className={`bg-blue-500 py-3 px-5 rounded-lg mt-5 shadow 
          ${disabled ? 'bg-gray-400' : ''}`}
        style={style}
        onPress={() => {
          if (!disabled) onPress();
        }}
        activeOpacity={disabled ? 1 : 0.7}
      >
        <Text
          className={`text-white text-base font-semibold text-center 
            ${disabled ? 'text-gray-300' : ''}`}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
