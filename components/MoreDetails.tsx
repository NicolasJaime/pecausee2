import React, { useState, useEffect } from 'react'
import { View, TextInput, TouchableOpacity, Alert, Switch, Text } from 'react-native'
import CustomText from './ui/CustomText'

const MoreDetails = () => {
  const [Email, setEmail] = useState('')
  const [Contraseña, setContraseña] = useState('')
  const [IsLogin, setIsLogin] = useState('');
  const [disabledLogin, setDisabledLogin] = useState(false)
  const [disabledRegistro, setDisabledRegistro] = useState(false)

  useEffect(() => {
    if (IsLogin === '') return;
    switch(IsLogin){
      case "Login":
      Alert.alert("Bienvenido");
      break;
    case "Registro":
      Alert.alert("Registro");
      break;
    default:
      break;
    }
  }, [IsLogin])
  

  return (
    <View className='h-1/2 w-screen bg-white flex flex-col justify-start items-start gap-4 p-4'>
      <CustomText variant="large" dark={true}>
        Email
      </CustomText>
      <TextInput
        placeholder=".............."
        value={Email}
        onChangeText={setEmail}
        className="border border-gray-300 rounded-2xl p-3 w-72 text-base"
      />
      <CustomText variant="large" dark={true}>
        Contraseña
      </CustomText>
      <TextInput
        placeholder="***********"
        value={Contraseña}
        onChangeText={setContraseña}
        className="border border-gray-300 rounded-2xl p-3 w-72 text-base"
      />
      <TouchableOpacity
        onPress={() => setIsLogin('Login')}
        disabled={disabledLogin}
      >
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setIsLogin('Registro')}
        disabled={disabledRegistro}
      >
        <Text>Registro</Text>
      </TouchableOpacity>
    </View>
  )
}
export default MoreDetails