import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';

import store from './src/common/store';

import {
  MapBoardContainer,
  MenuBar,
  ToiletInfoContainer,
  ReviewPage,
} from './src/components/mainComponents';
import MenuContainer from './src/components/menu/MenuContainer';
import ContentContainer from './src/components/menu/ContentContainer';

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

function FlexWrapper() {
  return (
    <View style={[styles.flexWrapper]}>
      <ToiletInfoContainer />
      <MapBoardContainer />
    </View>
  );
}

const App = ({}) => (
  <Provider store={store}>
    <View style={styles.backgroundStyle}>
      <ContentContainer />
      <MenuContainer />
      <MenuBar />
      <FlexWrapper />
      <ReviewPage />
    </View>
  </Provider>
);

export default App;
