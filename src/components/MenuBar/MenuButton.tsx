import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Icon from 'react-native-vector-icons/Entypo';
import RoundButton from '../UI/RoundButton';

import {RootState} from '../../common/store';
import {closeMenu, changeMenu} from '../../common/menuReducer';

const MenuButton = ({id, iconName, openedMenuId}) => {
  const dispatch = useDispatch();
  const [pressed, setPressed] = useState(false);
  const closed = useSelector((state: RootState) => state.menu.closed);
  return (
    <RoundButton
      onPressInHandler={({nativeEvent}) => {
        setPressed(true);
        if (openedMenuId === id && !closed) dispatch(closeMenu());
        else
          dispatch(
            changeMenu({
              id,
              pos: {x: nativeEvent.pageX, y: nativeEvent.pageY},
            }),
          );
      }}
      onPressOutHandler={() => {
        setPressed(false);
      }}>
      <Icon name={iconName} size={30} color={pressed ? '#fff' : '#3f94e9'} />
    </RoundButton>
  );
};

export default MenuButton;
