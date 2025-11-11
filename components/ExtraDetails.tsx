import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButtons from '@/components/CustomButtons';
import Register from '@/components/Register';
import Login from '@/components/Login';

export default function ExtraDetails() {
  const [activeScreen, setActiveScreen] = useState<'login' | 'register' | null>(null);

  return (
    <View style={styles.container}>
      {activeScreen === null && (
        <>
          <CustomButtons 
            title="Login 🔐"
            onPress={() => setActiveScreen('login')}
          />
          <CustomButtons 
            title="Register 📝"
            onPress={() => setActiveScreen('register')}
          />
        </>
      )}

      {activeScreen === 'login' && <Login />}
      {activeScreen === 'register' && <Register />}
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
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 10,
  },
});
