import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, ScrollView } from 'react-native';
import { Audio } from 'expo-av';

const screenWidth = Dimensions.get('window').width;

const songs = [
  {
    title: 'SoundHelix Song 1',
    uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    title: 'SoundHelix Song 2',
    uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    title: 'SoundHelix Song 3',
    uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
];

export default function NowPlaying() {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [playingTitle, setPlayingTitle] = useState<string | null>(null);

  async function playSong(song: { title: string; uri: string }) {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: song.uri },
      { shouldPlay: true }
    );
    setSound(newSound);
    setPlayingTitle(song.title);
  }

  async function stopPlayback() {
    if (sound) {
      await sound.stopAsync();
      setPlayingTitle(null);
    }
  }

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🎶 Music</Text>

      <View style={styles.songList}>
        {songs.map((song) => (
          <View key={song.title} style={styles.playerBox}>
            <Text style={styles.songTitle}>{song.title}</Text>
            <Button
              title={playingTitle === song.title ? '⏸️ Detener' : '▶️ Reproducir'}
              onPress={() =>
                playingTitle === song.title ? stopPlayback() : playSong(song)
              }
            />
          </View>
        ))}
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
  songList: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  playerBox: {
    backgroundColor: '#fff3e0',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  songTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
});

