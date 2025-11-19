import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import CustomText from './ui/CustomText';

const MoreDetails = () => {
  const [Email, setEmail] = useState('');
  const [Contraseña, setContraseña] = useState('');

  return (
    <View className="w-full bg-white rounded-xl p-5 shadow-md items-center gap-4 mt-10">
      <CustomText variant="large" dark={true}>Email</CustomText>
      <TextInput
        placeholder=".............."
        value={Email}
        onChangeText={setEmail}
        className="border border-gray-300 rounded-2xl p-3 w-[90%] text-base"
        keyboardType="email-address"
      />

      <CustomText variant="large" dark={true}>Contraseña</CustomText>
      <TextInput
        placeholder="***********"
        value={Contraseña}
        onChangeText={setContraseña}
        className="border border-gray-300 rounded-2xl p-3 w-[90%] text-base"
        secureTextEntry
      />
    </View>
  );
};

export default MoreDetails;
