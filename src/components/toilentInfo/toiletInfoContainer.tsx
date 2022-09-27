/* eslint-disable react/jsx-props-no-spreading */
import React, {useRef} from 'react';
import {StyleSheet, Animated, PanResponder, Dimensions} from 'react-native';
import ToiletInfo from './toiletInfo';
// 아래쪽에서 잡아당기면 나오는 화장실 정보 관련 컴포넌트.

const styles = StyleSheet.create({
  toiletInfoContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    width: '100%',
    top: '90%',
    height: '200%',
    backgroundColor: '#fff',
    padding: 10,
  },
});

export default function ToiletInfoContainer() {
  const windowHeight = -Dimensions.get('window').height;

  const openDegree = useRef(0);
  const openDegreeHeight: number[] = [
    0,
    windowHeight * 0.4,
    windowHeight * 0.8,
  ];
  const pan = useRef(new Animated.Value(0)).current;

  const changeLevel = (val: number) => {
    if (val > openDegreeHeight[1]) {
      openDegree.current = 0;
    } else if (val < openDegreeHeight[1] && val > openDegreeHeight[2]) {
      openDegree.current = 1;
    } else if (openDegreeHeight[2] >= val) {
      openDegree.current = 2;
    }
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setValue(openDegreeHeight[openDegree.current]);
      },
      onPanResponderMove: (event, gestureState) => {
        if (openDegree.current === 2 && -windowHeight * 0.4 < gestureState.y0)
          return;

        const nextPos = openDegreeHeight[openDegree.current] + gestureState.dy;
        if (nextPos >= 0.85 * windowHeight) pan.setValue(nextPos);
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.vy < -1) openDegree.current = 2;
        else if (gestureState.vy > 1) openDegree.current = 0;
        else {
          const nextPos =
            openDegreeHeight[openDegree.current] + gestureState.dy;
          changeLevel(nextPos);
        }

        Animated.spring(pan, {
          toValue: openDegreeHeight[openDegree.current],
          useNativeDriver: true,
        }).start();
      },
    }),
  ).current;
  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={{
        ...styles.toiletInfoContainer,
        transform: [{translateY: pan}],
      }}>
      <ToiletInfo />
    </Animated.View>
  );
}
