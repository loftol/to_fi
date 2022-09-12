import React from 'react';
import {View, StyleSheet} from 'react-native';
import ToiletInfo from './toiletInfo';
import commonStyles from '../../common/commonStyles';
// 아래쪽에서 잡아당기면 나오는 화장실 정보 관련 컴포넌트.

const styles = StyleSheet.create({
  toiletInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 200,
    backgroundColor: '#a0a',
  },
});

export default function ToiletInfoContainer() {
  return (
    <View style={[styles.toiletInfoContainer, commonStyles.border]}>
      <ToiletInfo />
    </View>
  );
}
