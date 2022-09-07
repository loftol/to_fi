import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

// 메뉴 관련 컴포넌트, 위쪽에 styles, 아래쪽에 컴포넌트 순서대로 배치

const styles = StyleSheet.create({
  singleBlock: {
    flex: 1,
    width: 150,
    height: 10,
    backgroundColor: '#fff',
  },
});

export default function Menu() {
  return (
    <View style={[styles.singleBlock]}>
      <Text>menu</Text>
    </View>
  );
}
