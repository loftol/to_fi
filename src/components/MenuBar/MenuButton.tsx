import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {change} from '../../common/showStateReducer';
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
        if (openedMenuId === id && !closed) {
          dispatch(change(0));
          dispatch(closeMenu());
        } else {
          dispatch(
            changeMenu({
              id,
              pos: {x: nativeEvent.pageX, y: nativeEvent.pageY},
            }),
          );
          dispatch(change(id));
        }
      }}
      onPressOutHandler={() => {
        setPressed(false);
      }}>
      <FontAwesomeIcon
        icon={['fas', iconName]}
        color={pressed ? '#fff' : '#3f94e9'}
      />
    </RoundButton>
  );
};

export default MenuButton;
