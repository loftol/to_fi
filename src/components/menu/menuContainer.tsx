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
  menuContainer: {
    position: 'absolute',
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

  const dispatch = useDispatch();

  const changeMenuState = () =>
    isMenuOpen ? dispatch(close()) : dispatch(open());

  return (
    <View style={{...styles.menuContainer, left: isMenuOpen ? 0 : -200}}>
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
