import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const musicGenres = ['Pop', 'Rock', 'Reggaetón', 'Jazz', 'Clásica', 'Electrónica'];
const topSongs = [
  'Flowers – Miley Cyrus',
  'As It Was – Harry Styles',
  'Ella Baila Sola – Eslabón Armado',
  'Dance The Night – Dua Lipa',
  'TQG – Karol G & Shakira',
  'Kill Bill – SZA',
];

const screenWidth = Dimensions.get('window').width;

export default function HomeLayout() {
  return (
    <View className="flex-1 bg-white">
      <View className="bg-pink-100">
        <Tabs
          screenOptions={{
            tabBarStyle: {
              backgroundColor: '#ffe5e5',
              borderTopWidth: 0,
              height: 70,
            },
            tabBarActiveTintColor: '#dc2626',
            tabBarInactiveTintColor: '#9ca3af',
          }}
        >
          <Tabs.Screen 
            name="HomeScreen"
            options={{
              title: 'DashBoard',
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="dashboard" color={color} size={size} />
              ),
            }}
          />
          <Tabs.Screen 
            name="NowPlaying"
            options={{
              title: 'Playing Now',
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="library-music" color={color} size={size} />
              ),
            }}
          />
          <Tabs.Screen
            name="Settingscreen"
            options={{
              title: 'Configuración',
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="settings" color={color} size={size} />
              ),
            }}
          />
        </Tabs>

        <View className="bg-pink-100 py-1.5 items-center">
          <Text className="text-sm text-red-600 font-medium">© 2025 TuApp Musical 🎶</Text>
        </View>
      </View>

      <ScrollView contentContainerClassName="pb-10">
        <View
          style={{ width: screenWidth }}
          className="py-5 px-6 bg-gray-50"
        >
          <Text className="text-2xl font-bold text-red-600 mb-6 text-center">
            🎶 Música en tendencia
          </Text>

          <View className="bg-pink-50 p-3 rounded-lg mb-4">
            <Text className="text-xl font-semibold text-gray-800 mb-2">🎧 Tipos de música</Text>
            {musicGenres.map((genre) => (
              <TouchableOpacity key={genre}>
                <Text className="text-lg text-gray-800 font-medium my-1 py-2 px-3 rounded-lg">
                  • {genre}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View className="bg-orange-50 p-3 rounded-lg">
            <Text className="text-xl font-semibold text-gray-800 mb-2">🔥 Canciones más escuchadas</Text>
            {topSongs.map((song) => (
              <TouchableOpacity key={song}>
                <Text className="text-lg text-gray-800 font-medium my-1 py-2 px-3 rounded-lg">
                  • {song}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
