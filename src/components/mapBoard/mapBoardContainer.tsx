import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import MapBoard from './mapBoard';
import {RootState} from '../../common/store';
import {closeInfo} from '../../common/infoOpened';

// 지도 부분 컴포넌트.

const styles = StyleSheet.create({
  mapBoard: {
    position: 'absolute',
    zIndex: 0,
    width: '100%',
    height: '100%',
  },
});

export default function MapBoardContainer() {
  const dispatch = useDispatch();
  const infoOpened = useSelector(
    (state: RootState) => state.infoOpened.infoOpened,
  );

  const touchEndHandler = () => {
    if (infoOpened) dispatch(closeInfo(''));
  };
  return (
    <View style={[styles.mapBoard]} onTouchStart={touchEndHandler}>
      <MapBoard />
    </View>
  );
}
