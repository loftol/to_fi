/* eslint-disable react/jsx-props-no-spreading */
import React, {useRef} from 'react';
import {StyleSheet, Animated, PanResponder} from 'react-native';
import ToiletInfo from './toiletInfo';
import devStyles from '../../common/devStyles';
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
  const pan = useRef(new Animated.Value(0)).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dy: pan}]),
      onPanResponderRelease: () => {
        Animated.spring(pan, {toValue: 0, useNativeDriver: true}).start();
      },
    }),
  ).current;

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={{
        ...styles.toiletInfoContainer,
        ...devStyles.border,
        transform: [{translateY: pan}],
      }}>
      <ToiletInfo />
    </Animated.View>
  );
}
