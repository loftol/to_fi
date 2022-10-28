import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';

import store, {RootState} from './src/common/store';
import {close} from './src/common/isMenuOpenReducer';

import {
  MapBoardContainer,
  MenuContainer,
  MenuBar,
  ToiletInfoContainer,
  ReviewPage,
} from './src/components/mainComponents';
import GrowingCircle from './src/components/UI/GrowingCircle';

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#000',
    height: '100%',
    width: '100%',
  },
  flexWrapper: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: '#a0a0a0',
    alignItems: 'center',
  },
  tmpButton: {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    right: '5%',
    top: '10%',
  },
});

const windowHeight = Dimensions.get('window').height;

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
      <ToiletInfoContainer />
      <MapBoardContainer />
    </View>
  );
}

interface Props {}
console.log(windowHeight);
const App = ({}: Props) => (
  <Provider store={store}>
    <View style={styles.backgroundStyle}>
      <GrowingCircle from={1} to={windowHeight * 2.5} pos={{x: 1, y: 1}} />
      <MenuBar />
      <FlexWrapper />
      <MenuContainer />
      <ReviewPage />
    </View>
  </Provider>
);

export default App;
