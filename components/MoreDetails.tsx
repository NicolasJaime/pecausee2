import React, { useState } from 'react'
import { View, TextInput } from 'react-native'
import CustomText from './ui/CustomText'

const MoreDetails = () => {
  const [texto, setTexto] = useState('')

  return (
    <View className='h-1/2 w-screen bg-white flex flex-col justify-start items-start gap-4 p-4'>
      <CustomText variant="large" dark={true}>
        Email
      </CustomText>
      <TextInput
        placeholder=".............."
        value={texto}
        onChangeText={setTexto}
        className="border border-gray-300 rounded-2xl p-3 w-72 text-base"
      />
      <CustomText variant="large" dark={true}>
        Contraseña
      </CustomText>
      <TextInput
        placeholder="***********"
        value={texto}
        onChangeText={setTexto}
        className="border border-gray-300 rounded-2xl p-3 w-72 text-base"
      />
    </View>
  )
}
export default MoreDetails