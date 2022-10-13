import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';

import store, {RootState} from './src/common/store';
import {close} from './src/common/isMenuOpenReducer';

import RoundButton from './src/components/UI/RoundButton';
import {addData, deleteData} from './src/common/toiletDataReducer';

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
  tmpButton: {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    right: '5%',
    top: '3%',
  },
});

function FlexWrapper() {
  const anyDispatch = useDispatch<any>();
  const dispatch = useDispatch();

  const menuOpened = useSelector(
    (state: RootState) => state.isMenuOpen.isMenuOpen,
  );

  const touchStartHandler = () => {
    if (menuOpened) dispatch(close());
  };

  let last = 0;

  const plusPressHandler = () => {
    if (last < 5) {
      last += 1;
      anyDispatch(addData(last));
    }
  };
  const minusPressHandler = () => {
    if (last > 0) {
      dispatch(deleteData(last));
      last -= 1;
    }
  };

  return (
    <View style={[styles.flexWrapper]} onTouchStart={touchStartHandler}>
      <MapBoardContainer />
      <ToiletInfoContainer />
      <View style={styles.tmpButton}>
        <RoundButton title="+" onPressHandler={plusPressHandler} />
        <RoundButton title="-" onPressHandler={minusPressHandler} />
      </View>
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
