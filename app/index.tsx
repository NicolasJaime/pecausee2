import { StyleSheet, ScrollView, SafeAreaView, View, TouchableOpacity, Text } from 'react-native';
import { router } from 'expo-router';

import MoreDetails from "@/components/MoreDetails";
import ProfileDetails from "@/components/ProfileDetails";
import ExtraDetails from "@/components/ExtraDetails";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ProfileDetails />
        <MoreDetails />
        <ExtraDetails />



      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 16,
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  registerButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});