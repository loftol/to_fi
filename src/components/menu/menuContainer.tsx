import React, {useEffect, useRef} from 'react';
import {StyleSheet, Animated, PanResponder} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../common/store';
import {close} from '../../common/isMenuOpenReducer';
import UserMenu from './userMenu';

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'black',
    color: 'white',
    position: 'absolute',
    right: -100,
    top: 50,
  },
  menuContainer: {
    position: 'absolute',
    // left: 0,
    top: 0,
    height: '100%',
    backgroundColor: '#fff',
  },
});

export default function MenuContainer() {
  const isMenuOpen = useSelector(
    (state: RootState) => state.isMenuOpen.isMenuOpen,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(close());
  }, []);

  const menuContainerWidth = 250;
  const moveAnim = useRef(new Animated.Value(-menuContainerWidth)).current;
  const pan = useRef(new Animated.Value(0)).current;

  const moveLeft = () => {
    Animated.timing(moveAnim, {
      toValue: -menuContainerWidth,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const moveRight = () => {
    Animated.timing(moveAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  if (isMenuOpen) {
    moveRight();
  } else {
    moveLeft();
  }

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        const nextPos = gestureState.dx;
        if (nextPos <= 0) pan.setValue(nextPos);
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.vx < -1) dispatch(close());
      },
    }),
  ).current;

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={{
        ...styles.menuContainer,
        transform: [{translateX: moveAnim}],
        width: menuContainerWidth,
      }}>
      <UserMenu />
    </Animated.View>
  );
}
