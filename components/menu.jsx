import React from 'react';
import {View, StyleSheet} from 'react-native';

// 메뉴 관련 컴포넌트, 위쪽에 styles, 아래쪽에 컴포넌트 순서대로 배치

const styles = StyleSheet.create({
  singleBlock: {},
});

export default function Menu() {
  return <View style={[styles.singleBlock]} />;
}
