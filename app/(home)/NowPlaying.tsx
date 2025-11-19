import React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

export default function SongView() {
  const song = {
    title: 'MAPS',
    image: 'https://i.scdn.co/image/ab67616d0000b273298125480feb529c5250f50e',
    duration: '2:15',
  };

  return (
    <View className="flex-1 bg-[#121212] items-center justify-center px-6">
      <Image
        source={{ uri: song.image }}
        style={{
          width: screenWidth * 0.85,
          height: screenWidth * 0.85,
          borderRadius: 16,
          marginBottom: 24,
          resizeMode: 'cover',
        }}
      />
      <View className="items-center">
        <Text className="text-2xl font-bold text-white mb-2 text-center">
          {song.title}
        </Text>
        <Text className="text-base text-gray-400 mb-5">
          Duración: {song.duration}
        </Text>

        <View className="flex-row justify-between w-52 items-center">
          <TouchableOpacity>
            <MaterialIcons name="replay-10" size={36} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="pause" size={48} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="forward-10" size={36} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
