import { Link, router } from 'expo-router';
import { StyleSheet, ScrollView, SafeAreaView, View } from 'react-native';

import MoreDetails from "@/components/MoreDetails";
import ProfileDetails from "@/components/ProfileDetails";
import CustomButtons from '@/components/CustomButtons';
import ExtraDetails from '@/components/ExtraDetails';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ProfileDetails />
        <MoreDetails />
        <ExtraDetails/>
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
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 20,
  },
});