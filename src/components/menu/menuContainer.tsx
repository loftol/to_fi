import React from 'react';
import {StyleSheet, View} from 'react-native';
import UserMenu from './userMenu';

const styles = StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    height: '100%',
    backgroundColor: '#fff',
  },
});

export default function MenuContainer() {
  return (
    <View style={styles.menuContainer}>
      <UserMenu />
    </View>
  );
}
