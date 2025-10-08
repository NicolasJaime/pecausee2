import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

import CustomText from "@/components/ui/CustomText";
import MoreDetails from "@/components/MoreDetails";
import ProfileDetails from "@/components/ProfileDetails";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ProfileDetails />
      <MoreDetails />
      <Link href="/(home)">View details</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
/*

*/
/*

*/