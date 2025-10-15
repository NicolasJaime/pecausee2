import { Link } from 'expo-router';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export class Settingscreen extends Component {
  render() {
    return (
      <View>
        <Link href="/">(Log Out)</Link>
      </View>
    )
  }
}

export default Settingscreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
