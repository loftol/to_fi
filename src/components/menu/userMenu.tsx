import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import MenuItem from './menuItem';
import ProfileContainer from './profile/profileContainer';
// 메뉴 관련 컴포넌트, 위쪽에 styles, 아래쪽에 컴포넌트 순서대로 배치

const styles = StyleSheet.create({
  itemContainerStyle: {
    margin: 10,
    paddingTop: 15,
    paddingRight: '2%',
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
  },
  profile: {
    marginBottom: 15,
    height: '30%',
    width: '100%',
    borderBottomColor: '#333',
    borderBottomWidth: 0.5,
  },
});

export default function userMenu() {
  return (
    <View style={{height: '100%', backgroundColor: '#fff'}}>
      <SafeAreaView>
        <ProfileContainer />
        <View style={[styles.itemContainerStyle]}>
          <MenuItem itemName="menu1" />
          <MenuItem itemName="menu2" />
          <MenuItem itemName="menu3" />
          <MenuItem itemName="menu4" />
          <MenuItem itemName="menu5" />
          <MenuItem itemName="menu6" />
        </View>
      </SafeAreaView>
    </View>
  );
}
