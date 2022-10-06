/* eslint-disable react/jsx-props-no-spreading */
import React, {useRef} from 'react';
import {StyleSheet, Animated, PanResponder, Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {openInfo, closeInfo} from '../../common/infoOpened';
import ToiletInfoList from './ToiletInfoList';
import {RootState} from '../../common/store';

// 아래쪽에서 잡아당기면 나오는 화장실 정보 관련 컴포넌트.

const styles = StyleSheet.create({
  toiletInfoContainer: {
    position: 'absolute',
    width: '500%',
    top: '90%',
    left: 0,
    height: '100%',
    flexDirection: 'row',
  },
});

export default function ToiletInfoContainer() {
  const dispatch = useDispatch();
  const [infoOpened, menuOpened] = useSelector((state: RootState) => [
    state.infoOpened.infoOpened,
    state.isMenuOpen.isMenuOpen,
  ]);
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
      dispatch(closeInfo(''));
    } else if (val < openDegreeHeight[1] && val > openDegreeHeight[2]) {
      openDegree.current = 1;
      dispatch(closeInfo(''));
    } else if (openDegreeHeight[2] >= val) {
      openDegree.current = 2;
      dispatch(openInfo(''));
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
        if (gestureState.vy < -1) {
          openDegree.current = 2;
          dispatch(openInfo(''));
        } else if (gestureState.vy > 1) {
          openDegree.current = 0;
          dispatch(closeInfo(''));
        } else {
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

  if (!infoOpened && openDegree.current === 2) {
    openDegree.current = 0;
    Animated.spring(pan, {
      toValue: openDegreeHeight[0],
      useNativeDriver: true,
    }).start();
  }

  if (menuOpened && openDegree.current !== 0) {
    openDegree.current = 0;
    Animated.spring(pan, {
      toValue: openDegreeHeight[0],
      useNativeDriver: true,
    }).start();
  }

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={{
        ...styles.toiletInfoContainer,
        transform: [{translateY: pan}],
      }}>
      <ToiletInfoList />
    </Animated.View>
  );
}
