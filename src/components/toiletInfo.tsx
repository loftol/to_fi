import React from 'react';
import {View, StyleSheet} from 'react-native';

// 아래쪽에서 잡아당기면 나오는 화장실 정보 관련 컴포넌트.

const styles = StyleSheet.create({
  toiletInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 200,
    backgroundColor: '#aaa',
  },
});

export default function ToiletInfo() {
  return <View style={[styles.toiletInfo]} />;
}
