import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Register() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro 📝</Text>
      {/* Aquí puedes agregar tu formulario de registro */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff0f6',
    borderRadius: 12,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
