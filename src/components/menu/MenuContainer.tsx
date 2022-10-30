import React from 'react';
import {Dimensions, View} from 'react-native';
import {useSelector} from 'react-redux';

import GrowingCircle from '../UI/GrowingCircle';

import {RootState} from '../../common/store';

const windowHeight = Dimensions.get('window').height;

const menuColorData = ['#faf7f0', '#cdfcf6', '#bccef8', '#98a8f8'];

const MenuContainer = () => {
  const openedMenu = useSelector((state: RootState) => state.menu.openedMenu);
  const closed = useSelector((state: RootState) => state.menu.closed);

  let from: number;
  let to: number;

  if (openedMenu.id === -1 && closed === false) {
    from = 1;
    to = 1;
  } else if (closed) {
    from = windowHeight * 2.5;
    to = 1;
  } else {
    from = 1;
    to = windowHeight * 2.5;
  }

  return (
    <View style={{position: 'absolute', zIndex: 2}}>
      <GrowingCircle
        from={from}
        to={to}
        pos={{x: openedMenu.pos.x, y: openedMenu.pos.y}}
        color={menuColorData[openedMenu.id]}
      />
    </View>
  );
};

export default MenuContainer;
