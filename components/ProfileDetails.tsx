import "@/global.css"
import React from 'react'
import { ImageBackground, View } from 'react-native'

import CustomText from "./ui/CustomText"
const ProfileDetails = () => {
  return (
      <View className="flex justify-center items-center h-1/2 w-screen bg-white">
      <ImageBackground
        source={require("../assets/images/fondo.png")}
        className="w-full h-full justify-end items-start p-6"
        resizeMode="cover"
      >
        {/* Texto encima de la imagen */}
        <CustomText variant="large" dark={false}>Sign in</CustomText>
      </ImageBackground>
    </View>
  )
}

export default ProfileDetails