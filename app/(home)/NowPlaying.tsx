import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const screenWidth = Dimensions.get('window').width;

export default function NowPlaying() {
  const [isPlaying, setIsPlaying] = useState(false);

  const song = {
    title: 'MAPS',
    embedUrl: 'https://www.youtube.com/watch?v=Y7ix6RITXM0&list=RDY7ix6RITXM0&start_radio=1',
  };

  function togglePlayback() {
    setIsPlaying((prev) => !prev);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🎶 Música en tendencia</Text>

      <View style={styles.playerBox}>
        <Text style={styles.songTitle}>Reproduciendo: {song.title}</Text>
        <Button
          title={isPlaying ? '⏸️ Pausar' : '▶️ Reproducir'}
          onPress={togglePlayback}
        />
        {isPlaying && (
          <WebView
            source={{ uri: song.embedUrl }}
            style={styles.hiddenWebview}
            allowsInlineMediaPlayback={true}
            mediaPlaybackRequiresUserAction={false}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#dc2626',
    marginBottom: 16,
    textAlign: 'center',
  },
  playerBox: {
    backgroundColor: '#fff3e0',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  songTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  hiddenWebview: {
    width: 0,
    height: 0,
    opacity: 0,
  },
});

