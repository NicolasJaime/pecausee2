import { Link, router } from 'expo-router';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import MoreDetails from "@/components/MoreDetails";
import ProfileDetails from "@/components/ProfileDetails";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ProfileDetails />
      <MoreDetails />

      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push('/Settingscreen')} // 👈 asegúrate que el nombre del archivo sea igual
      >
      <Text style={styles.buttonText}>Ir a Configuración ⚙️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});