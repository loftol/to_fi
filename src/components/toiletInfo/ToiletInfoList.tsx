/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {StyleSheet, View} from 'react-native';

import ToiletInfo from './toiletInfo';
import datas from './dummydata';

const styles = StyleSheet.create({
  toiletInfoList: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
});

export default function ToiletInfoList() {
  const toiletInfoView = datas.map(data => (
    <ToiletInfo key={data.id} toiletData={data} />
  ));

  return <View style={styles.toiletInfoList}>{toiletInfoView}</View>;
}
