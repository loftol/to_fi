import React from 'react';
import {View, Dimensions, PanResponder} from 'react-native';

import ToiletInfo from './toiletInfo';

export default function ToiletInfoList() {
  const unitWidth = Dimensions.get('window').width;

  const panResponder = React.useRef(PanResponder.create({}));

  return (
    <View style={{width: '100%', height: '100%'}}>
      <ToiletInfo />
      <ToiletInfo />
      <ToiletInfo />
      <ToiletInfo />
      <ToiletInfo />
    </View>
  );
}
