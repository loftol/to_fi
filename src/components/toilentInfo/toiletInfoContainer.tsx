/* eslint-disable react/jsx-props-no-spreading */
import React, {useRef} from 'react';
import {
  StyleSheet,
  Animated,
  PanResponder,
  Dimensions,
  Text,
} from 'react-native';
import ToiletInfo from './toiletInfo';
import devStyles from '../../common/devStyles';
// 아래쪽에서 잡아당기면 나오는 화장실 정보 관련 컴포넌트.

const styles = StyleSheet.create({
  toiletInfoContainer: {
    position: 'absolute',
    top: '100%',
    width: '100%',
    height: '200%',
    backgroundColor: 'white',
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
    if (windowHeight > val) pan.setValue(windowHeight);
    else if (val > openDegreeHeight[1]) {
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
        if (
          openDegreeHeight[openDegree.current] + gestureState.dy >
          windowHeight
        )
          pan.setValue(openDegreeHeight[openDegree.current] + gestureState.dy);
      },
      onPanResponderRelease: (event, gestureState) => {
        changeLevel(openDegreeHeight[openDegree.current] + gestureState.dy);
        pan.flattenOffset();
        Animated.spring(pan, {
          toValue: openDegreeHeight[openDegree.current],
          useNativeDriver: true,
          velocity: -10,
        }).start();
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
      <Text>{openDegree.current}</Text>
    </Animated.View>
  );
}
