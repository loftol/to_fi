import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import ReviewList from './ToiletReview/ReviewList';

import datas from './dummydata';

const styles = StyleSheet.create({
  toiletInfoContainer: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    height: '90%',
    width: '19%',
    backgroundColor: '#fff',
    padding: 10,
    margin: '0.5%',
  },
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

// const toiletInfoView: JSX.Element | JSX.Element[] = datas.map(info => (
//   <ReviewItem name={review.name} main={review.main} />
// ));

export default function toiletInfo() {
  return (
    <View style={styles.toiletInfoContainer}>
      <View style={styles.guideBar} />
      <Text style={styles.toiletName}>{datas[0].name}</Text>
      <View style={styles.toiletAddress}>
        <Text style={{fontWeight: 'bold'}}>주소</Text>
        <Text>{datas[0].address}</Text>
      </View>
      <ReviewList reviews={datas[0].review} />
    </View>
  );
}
