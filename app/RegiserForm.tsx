import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

export default function RegiserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Aquí podrías validar o enviar los datos
    Alert.alert('Registro exitoso', `Bienvenido, ${name}!`);
  };

  return (
    <View className="flex-1 bg-white justify-center px-5">
      <Text className="text-2xl font-bold mb-8 text-center">
        Formulario de Registro
      </Text>

      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-4 text-base"
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-4 text-base"
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-4 text-base"
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Botón de registro */}
      <View className="flex-row justify-center mt-2">
        <TouchableOpacity
          onPress={handleRegister}
          className="bg-blue-600 py-3 px-6 rounded-lg"
        >
          <Text className="text-white font-bold text-lg">Register</Text>
        </TouchableOpacity>
      </View>

      {/* Botón para volver atrás */}
      <TouchableOpacity
        className="items-center py-2 mt-5"
        onPress={() => router.back()}
      >
        <Text className="text-blue-600 text-lg">Volver</Text>
      </TouchableOpacity>
    </View>
  );
}
