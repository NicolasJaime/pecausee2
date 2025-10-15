import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const screenWidth = Dimensions.get('window').width;

export default function SongView() {
  const song = {
    title: 'MAPS',
    uri: 'https://www.youtube.com/watch?v=Y7ix6RITXM0&list=RDY7ix6RITXM0&start_radio=1',
    image: 'https://i.scdn.co/image/ab67616d0000b273298125480feb529c5250f50e',
    duration: '2:15',
  };

  return (
    <View style={styles.container}>
      <View style={styles.playerBox}>
        <Image source={{ uri: song.image }} style={styles.cover} />
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.duration}>Duración: {song.duration}</Text>
        <WebView source={{ uri: song.uri }} style={styles.webview} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe5e5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  playerBox: {
    backgroundColor: '#fff3e0',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    width: screenWidth * 0.9,
    height: '90%',
    overflow: 'hidden',
  },
  cover: {
    width: 280,
    height: 280,
    borderRadius: 16,
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#dc2626',
    marginBottom: 8,
    textAlign: 'center',
  },
  duration: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
  },
  webview: {
    flex: 1,
    width: '100%',
  },
});
