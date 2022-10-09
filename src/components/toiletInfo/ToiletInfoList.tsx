/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState} from '../../common/store';
import ToiletInfo from './toiletInfo';

const styles = StyleSheet.create({
  toiletInfoList: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
});

export default function ToiletInfoList() {
  const datas = useSelector((state: RootState) => state.toiletData.datas);

  const toiletInfoView = datas.map(data => (
    <ToiletInfo key={data.id} toiletData={data} />
  ));

  return <View style={styles.toiletInfoList}>{toiletInfoView}</View>;
}
