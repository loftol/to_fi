import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/Entypo';
import MenuButton from './MenuButton';
import RoundButton from '../UI/RoundButton';

import {RootState} from '../../common/store';
import {hideMenuList, closeMenu} from '../../common/menuReducer';

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const MenuLists = () => {
  const dispatch = useDispatch();
  const openedMenuId = useSelector(
    (state: RootState) => state.menu.openedMenu.id,
  );
  const [pressed, setPressed] = useState(-1);

  const pressHandler = (id: number) => {
    setPressed(id);
  };

  return (
    <View style={styles.buttonContainer}>
      <RoundButton
        onPressInHandler={() => {
          setPressed(0);
        }}
        onPressHandler={() => {
          setPressed(-1);
          dispatch(closeMenu());
          dispatch(hideMenuList());
        }}>
        <Icon
          name="menu"
          size={30}
          color={pressed === 0 ? '#fff' : '#3f94e9'}
        />
      </RoundButton>

      <MenuButton
        id={1}
        openedMenuId={openedMenuId}
        pressHandler={pressHandler}>
        <Icon
          name="menu"
          size={30}
          color={pressed === 1 ? '#fff' : '#3f94e9'}
        />
      </MenuButton>
      <MenuButton
        id={2}
        openedMenuId={openedMenuId}
        pressHandler={pressHandler}>
        <Icon
          name="menu"
          size={30}
          color={pressed === 2 ? '#fff' : '#3f94e9'}
        />
      </MenuButton>
      <MenuButton
        id={3}
        openedMenuId={openedMenuId}
        pressHandler={pressHandler}>
        <Icon
          name="menu"
          size={30}
          color={pressed === 3 ? '#fff' : '#3f94e9'}
        />
      </MenuButton>
    </View>
  );
};

export default MenuLists;
