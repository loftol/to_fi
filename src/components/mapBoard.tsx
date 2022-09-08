import React from 'react';
import {View, StyleSheet} from 'react-native';

// 지도 부분 컴포넌트.

const styles = StyleSheet.create({
  mapBoard: {
    flex: 1,
    width: '100%',
    backgroundColor: '#050',
  },
});

export default function MapBoard() {
  return <View style={[styles.mapBoard]} />;
}
