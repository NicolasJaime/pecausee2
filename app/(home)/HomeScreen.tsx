import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
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
    <View style={styles.wrapper}>
      <View style={styles.tabsWrapper}>
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

        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2025 TuApp Musical 🎶</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.infoSection}>
          <Text style={styles.header}>🎶 Música en tendencia</Text>

          <View style={styles.blockGenres}>
            <Text style={styles.sectionTitle}>🎧 Tipos de música</Text>
            {musicGenres.map((genre) => (
              <TouchableOpacity key={genre}>
                <Text style={styles.genreItem}>• {genre}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.blockSongs}>
            <Text style={styles.sectionTitle}>🔥 Canciones más escuchadas</Text>
            {topSongs.map((song) => (
              <TouchableOpacity key={song}>
                <Text style={styles.songItem}>• {song}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabsWrapper: {
    backgroundColor: '#ffe5e5',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  infoSection: {
    width: screenWidth,
    paddingVertical: 20,
    paddingHorizontal: 24,
    backgroundColor: '#fefefe',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#dc2626',
    marginBottom: 24,
    textAlign: 'center',
  },
  blockGenres: {
    backgroundColor: '#ffeef0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  blockSongs: {
    backgroundColor: '#fff3e0',
    padding: 12,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  genreItem: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
    marginVertical: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  songItem: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
    marginVertical: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  footer: {
    backgroundColor: '#ffe5e5',
    paddingVertical: 6,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#dc2626',
    fontWeight: '500',
  },
});
