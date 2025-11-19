import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, RegisterData } from '../lib/schemas/RegisterSchema';
import TextField from '../components/TextField';
import { router } from 'expo-router';

export default function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data: RegisterData) => {
    console.log('✅ Registro válido:', data);
    router.push('/(home)/HomeScreen'); // navega a la pantalla Home
  };

  return (
    <View className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md self-center mt-10">
      <Text className="text-2xl font-semibold mb-6 text-center">Registro</Text>

      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <TextField
            label="Correo electrónico"
            value={field.value}
            onChangeText={field.onChange}
            placeholder="ejemplo@correo.com"
            error={errors.email?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <TextField
            label="Contraseña"
            value={field.value}
            onChangeText={field.onChange}
            placeholder="********"
            secureTextEntry
            error={errors.password?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="confirmPassword"
        render={({ field }) => (
          <TextField
            label="Confirmar contraseña"
            value={field.value}
            onChangeText={field.onChange}
            placeholder="********"
            secureTextEntry
            error={errors.confirmPassword?.message}
          />
        )}
      />

      <TouchableOpacity
        className="bg-emerald-500 py-3 rounded-lg items-center mt-4"
        onPress={handleSubmit(onSubmit)}
      >
        <Text className="text-white font-semibold text-lg">Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}
