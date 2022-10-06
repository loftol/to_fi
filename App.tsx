import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';

import store, {RootState} from './src/common/store';
import {close} from './src/common/isMenuOpenReducer';

import {
  MapBoardContainer,
  MenuContainer,
  ToiletInfoContainer,
  ReviewPage,
} from './src/components/mainComponents';

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#000',
    height: '100%',
    width: '100%',
  },
  flexWrapper: {
    position: 'absolute',
    flexDirection: 'column',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#a0a0a0',
    alignItems: 'center',
  },
});

function FlexWrapper() {
  const dispatch = useDispatch();
  const menuOpened = useSelector(
    (state: RootState) => state.isMenuOpen.isMenuOpen,
  );

  const touchStartHandler = () => {
    if (menuOpened) dispatch(close());
  };
  return (
    <View style={[styles.flexWrapper]} onTouchStart={touchStartHandler}>
      <MapBoardContainer />
      <ToiletInfoContainer />
    </View>
  );
}

interface Props {}

const App = ({}: Props) => (
  <Provider store={store}>
    <View style={styles.backgroundStyle}>
      <FlexWrapper />
      <MenuContainer />
      <ReviewPage />
    </View>
  </Provider>
);

export default App;
