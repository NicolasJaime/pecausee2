import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

export default function SongView() {
  const song = {
    title: 'MAPS',
    image: 'https://i.scdn.co/image/ab67616d0000b273298125480feb529c5250f50e',
    duration: '2:15',
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: song.image }} style={styles.cover} />
      <View style={styles.infoBox}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.duration}>Duración: {song.duration}</Text>

        <View style={styles.controls}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  cover: {
    width: screenWidth * 0.85,
    height: screenWidth * 0.85,
    borderRadius: 16,
    marginBottom: 24,
    resizeMode: 'cover',
  },
  infoBox: {
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
    textAlign: 'center',
  },
  duration: {
    fontSize: 16,
    color: '#b3b3b3',
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    alignItems: 'center',
  },
});
