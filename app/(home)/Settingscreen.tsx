import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const screenWidth = Dimensions.get('window').width;

const settingsOptions = [
  'Configuración',
  'Tu actividad',
  'Guardado',
  'Apariencia',
  'Reportar un problema',
  'Music Premium',
  'Cambiar de cuenta',
];

export default function Settingscreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>⚙️ Ajustes</Text>

      <View style={styles.optionsBox}>
        {settingsOptions.map((option) => (
          <TouchableOpacity key={option} style={styles.optionButton}>
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={() => router.replace('/')}>
        <Text style={styles.logoutText}>🚪 Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    flex: 1,
    backgroundColor: '#ffe5e5',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#dc2626',
    marginBottom: 24,
    textAlign: 'center',
  },
  optionsBox: {
    flex: 1,
  },
  optionButton: {
    backgroundColor: '#fff3e0',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 12,
  },
  optionText: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
  },
  logoutButton: {
    backgroundColor: '#dc2626',
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 24,
  },
  logoutText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

