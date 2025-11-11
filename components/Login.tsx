import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión 🔐</Text>
      {/* Aquí puedes agregar tu formulario de login */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#e0f7fa',
    borderRadius: 12,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
