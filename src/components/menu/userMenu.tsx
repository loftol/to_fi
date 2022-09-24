import React from 'react';
import {View, StyleSheet} from 'react-native';
import MenuItem from './menuItem';
// 메뉴 관련 컴포넌트, 위쪽에 styles, 아래쪽에 컴포넌트 순서대로 배치

const styles = StyleSheet.create({
  itemContainerStyle: {
    marginTop: '15%',
    width: '100%',
    paddingLeft: '10%',
    paddingRight: '2%',
  },
  profile: {
    marginBottom: '15%',
    height: '30%',
    width: '100%',
    borderBottomColor: '#333',
    borderBottomWidth: 0.5,
  },
});

export default function userMenu() {
  return (
    <View>
      <View style={[styles.profile]} />
      <View style={[styles.itemContainerStyle]}>
        <MenuItem itemName="what" />
        <MenuItem itemName="what" />
        <MenuItem itemName="what" />
        <MenuItem itemName="what" />
        <MenuItem itemName="what" />
        <MenuItem itemName="what" />
      </View>
    </View>
  );
}
