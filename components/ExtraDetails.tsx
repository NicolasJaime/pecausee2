import React from 'react';
import { View, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import CustomButtons from '@/components/CustomButtons';

export default function ExtraDetails() {
  return (
    <View style={styles.container}>
  <CustomButtons 
    title="Login 🔐"
    onPress={() => router.push('/HomeScreen')}
  />
  <CustomButtons 
    title="Registro 📝"
    onPress={() => router.push('/HomeScreen')}
  />
  <CustomButtons 
    title="Inicio 🏠"
    onPress={() => router.push('/HomeScreen')}
  />
  <CustomButtons 
    title="Configuración ⚙️"
    onPress={() => router.push('/Settingscreen')}
  />
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f8b4d9',
    padding: 20,
    borderRadius: 12,
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
});
