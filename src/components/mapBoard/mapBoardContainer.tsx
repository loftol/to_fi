import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapBoard from './mapBoard';

// 지도 부분 컴포넌트.

const styles = StyleSheet.create({
  mapBoard: {
    flex: 1,
    width: '100%',
    backgroundColor: '#000',
  },
});

export default function MapBoardContainer() {
  return (
    <View style={[styles.mapBoard]}>
      <MapBoard />
    </View>
  );
}
