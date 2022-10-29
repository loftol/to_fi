import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import RoundButton from '../UI/RoundButton';

import {RootState} from '../../common/store';
import {closeMenu, changeMenu} from '../../common/menuReducer';

const MenuButton = ({id, pressHandler, children, openedMenuId}) => {
  const dispatch = useDispatch();
  const closed = useSelector((state: RootState) => state.menu.closed);
  return (
    <RoundButton
      onPressInHandler={({nativeEvent}) => {
        pressHandler(id);
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
        pressHandler(-1);
      }}>
      {children}
    </RoundButton>
  );
};

export default MenuButton;
