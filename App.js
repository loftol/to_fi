import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {MapBoard, Menu, ToiletInfo} from './src/components/mainComponents.tsx';

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: Colors.dark,
    height: '100%',
    fles: 1,
  },
});

const App: () => Node = () => (
  <SafeAreaView style={[styles.backgroundStyle]}>
    <Menu style={[styles.menu]} />
    <MapBoard style={[styles.mapBoard]} />
    <ToiletInfo style={[styles.toiletInfo]} />
  </SafeAreaView>
);

export default App;
