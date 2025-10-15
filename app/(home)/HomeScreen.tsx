import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
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
              borderTopWidth: 0, // 🔥 Elimina línea superior
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

        {/* 🔻 Footer pegado justo debajo de los tabs */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2025 TuApp Musical 🎶</Text>
        </View>
      </View>

      {/* 🎶 Información musical */}
      <View style={styles.infoSection}>
        <Text style={styles.header}>🎶 Música en tendencia</Text>

        <View style={styles.blockGenres}>
          <Text style={styles.sectionTitle}>🎧 Tipos de música</Text>
          {musicGenres.map((genre) => (
            <Text key={genre} style={styles.genreItem}>• {genre}</Text>
          ))}
        </View>

        <View style={styles.blockSongs}>
          <Text style={styles.sectionTitle}>🔥 Canciones más escuchadas</Text>
          {topSongs.map((song) => (
            <Text key={song} style={styles.songItem}>• {song}</Text>
          ))}
        </View>
      </View>
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
    marginBottom: 16,
    textAlign: 'center',
    fontFamily: 'sans-serif-medium',
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
    fontFamily: 'serif',
  },
  genreItem: {
    fontSize: 16,
    color: '#555',
    marginVertical: 4,
    fontFamily: 'sans-serif',
  },
  songItem: {
    fontSize: 16,
    color: '#222',
    marginVertical: 4,
    fontStyle: 'italic',
    fontFamily: 'monospace',
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

