import React from 'react';
import { View, TextInput, Text } from 'react-native';

type Props = {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  error?: string;
};

export default function TextField({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  error,
}: Props) {
  return (
    <View className="w-full mb-4">
      {label && (
        <Text className="mb-1 text-base font-medium text-gray-800">
          {label}
        </Text>
      )}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        className={`border rounded-xl p-3 text-base bg-white 
          ${error ? 'border-red-500' : 'border-gray-300'}`}
      />
      {error && (
        <Text className="mt-1 text-red-500 text-sm">
          {error}
        </Text>
      )}
    </View>
  );
}
