import React, {useEffect, useRef} from 'react';
import {Button, View, StyleSheet, Animated} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import commonStyles from '../../common/commonStyles';
import {RootState} from '../../common/store';
import {close, open} from '../../common/isMenuOpenReducer';
import UserMenu from './userMenu';

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'black',
    color: 'white',
    position: 'absolute',
    right: -100,
    top: 20,
  },
  menuContainer: {
    position: 'absolute',
    // left: 0,
    top: 0,
    width: 200,
    height: '100%',
    backgroundColor: '#fff',
  },
});

export default function MenuContainer() {
  const isMenuOpen = useSelector(
    (state: RootState) => state.isMenuOpen.isMenuOpen,
  );

  useEffect(() => {
    dispatch(close());
  }, []);

  const moveAnim = useRef(new Animated.Value(-200)).current;

  const dispatch = useDispatch();
  const moveLeft = () => {
    Animated.timing(moveAnim, {
      toValue: -200,
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

  const openMenu = () => {
    dispatch(open());
    moveRight();
  };
  const closeMenu = () => {
    dispatch(close());
    moveLeft();
  };

  const changeMenuState = () => (isMenuOpen ? closeMenu() : openMenu());

  return (
    <Animated.View
      style={{
        ...styles.menuContainer,
        ...commonStyles.border,
        transform: [{translateX: moveAnim}],
      }}>
      <UserMenu />
      <View style={styles.buttonStyle}>
        <Button
          onPress={() => changeMenuState()}
          title={isMenuOpen ? 'close' : 'open'}
        />
      </View>
    </Animated.View>
  );
}
