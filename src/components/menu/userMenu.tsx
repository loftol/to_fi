import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
// 메뉴 관련 컴포넌트, 위쪽에 styles, 아래쪽에 컴포넌트 순서대로 배치

export default function userMenu() {
  const [isOpen, setOpen] = useState(false);

  const position: 'absolute' | 'relative' | undefined = 'absolute';

  const menuContainer = {
    position,
    top: 0,
    left: isOpen ? 0 : -200,
    width: 200,
    height: '100%',
    backgroundColor: '#fff',
  };

  return (
    <View style={menuContainer}>
      <Text>menu</Text>
    </View>
  );
}
