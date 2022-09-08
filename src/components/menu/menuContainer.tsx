import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../common/store';
import {close, open} from '../../common/isMenuOpenReducer';
import UserMenu from './userMenu';

const styles = StyleSheet.create({
  buttonStyle: {
    position: 'absolute',
    right: -100,
    top: 20,
  },
});

export default function MenuContainer() {
  const isMenuOpen = useSelector(
    (state: RootState) => state.isMenuOpen.isMenuOpen,
  );

  const dispatch = useDispatch();

  const openMenu = () => {
    dispatch(open());
  };
  const closeMenu = () => {
    dispatch(close());
  };
  const changeMenuState = () => (isMenuOpen ? closeMenu() : openMenu());

  const position: 'absolute' | 'relative' | undefined = 'absolute';

  const menuContainer = {
    position,
    top: 0,
    left: isMenuOpen ? 0 : -200,
    width: 200,
    height: '100%',
    backgroundColor: '#fff',
  };

  return (
    <View style={menuContainer}>
      <UserMenu />
      <View style={styles.buttonStyle}>
        <Button
          onPress={() => changeMenuState()}
          title={isMenuOpen ? 'close' : 'open'}
        />
      </View>
    </View>
  );
}
