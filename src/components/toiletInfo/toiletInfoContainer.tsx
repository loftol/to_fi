/* eslint-disable react/jsx-props-no-spreading */
import React, {useRef, useEffect} from 'react';
import {StyleSheet, Animated, PanResponder, Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import ToiletInfoList from './ToiletInfoList';
import {RootState} from '../../common/store';

import Horizontal from './moveContainer/moveHorizontal';
import Vertical from './moveContainer/moveVertical';

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

const selectDir = (dy: number, dx: number) => {
  if (dy / dx > 2 || dy / dx < -2) return 'vertical';
  return 'horizontal';
};

export default function ToiletInfoContainer() {
  const dispatch = useDispatch();

  const [infoOpened, menuOpened] = useSelector((state: RootState) => [
    state.infoOpened.infoOpened,
    state.isMenuOpen.isMenuOpen,
  ]);

  const numberOfData = useSelector(
    (state: RootState) => state.toiletData.datas.length,
  );

  const windowHeight = -Dimensions.get('window').height;

  const windowWidth = Dimensions.get('window').width;

  const horizontal = useRef(new Horizontal(windowWidth)).current;
  const vertical = useRef(new Vertical(windowHeight)).current;

  horizontal.updateItemCount(numberOfData);

  let direction: string;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        direction = 'none';
      },
      onPanResponderMove: (event, gestureState) => {
        if (direction === 'none')
          direction = selectDir(gestureState.dy, gestureState.dx);

        if (direction === 'vertical') {
          vertical.onMove(gestureState.dy);
        } else {
          horizontal.onMove(gestureState.dx);
        }
      },
      onPanResponderRelease: (event, gestureState) => {
        if (direction === 'vertical') {
          vertical.onRelease(gestureState.vy, gestureState.dy, dispatch);
        } else {
          horizontal.onRelease(gestureState.vx, gestureState.dx);
        }
      },
    }),
  ).current;

  vertical.cleanUp(infoOpened, menuOpened);

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={{
        ...styles.toiletInfoContainer,
        transform: [{translateX: horizontal.pan}, {translateY: vertical.pan}],
      }}>
      <ToiletInfoList />
    </Animated.View>
  );
}
