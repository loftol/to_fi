import React, {Fragment} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ReviewList from './ToiletReview/ReviewList';

import datas from './dummydata';

const styles = StyleSheet.create({
  guideBar: {
    borderRadius: 20,
    backgroundColor: '#808080',
    width: '20%',
    height: 5,
    marginHorizontal: '40%',
  },
  toiletName: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  toiletAddress: {
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
});

export default function toiletInfo() {
  return (
    <>
      <View style={styles.guideBar} />
      <Text style={styles.toiletName}>멋진 화장실 이름</Text>
      <View style={styles.toiletAddress}>
        <Text style={{fontWeight: 'bold'}}>주소</Text>
        <Text>서울시 마포구 광성로 6길 56</Text>
      </View>
      <ReviewList reviews={datas[0].review} />
    </>
  );
}
