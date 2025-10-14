import { Link, router } from 'expo-router';
import { StyleSheet, ScrollView, SafeAreaView, View } from 'react-native';

import MoreDetails from "@/components/MoreDetails";
import ProfileDetails from "@/components/ProfileDetails";
import CustomButtons from '@/components/CustomButtons';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ProfileDetails />
        <MoreDetails />

        {/* Botones en la misma fila */}
        <View style={styles.buttonRow}>
          <CustomButtons 
            title="Inicio 🏠"
            onPress={() => router.push('./HomeScreen')}
          />
          <CustomButtons 
            title="Configuración ⚙️"
            onPress={() => router.push('/Settingscreen')}
          />
        </View>
        
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