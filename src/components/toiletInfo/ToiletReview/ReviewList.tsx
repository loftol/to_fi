import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {open} from '../../../common/isReviewOpenReducer';

import commonStyles from '../../../common/commonStyles';
import ReviewInput from './ReviewInput';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
  reviewContainer: {
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  showMoreReviewButton: {
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: 'white',
  },
});

export default function ToiletReviewList() {
  const dispatch = useDispatch();

  const buttonPressHandler = () => {
    dispatch(open());
  };

  return (
    <>
      <View style={styles.reviewContainer}>
        <View style={commonStyles.bottomBorderBox}>
          <Text>4.0 점 별별별별별</Text>
        </View>
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <View style={styles.showMoreReviewButton}>
          <Button title="리뷰 더 보기" onPress={buttonPressHandler} />
        </View>
      </View>
      <ReviewInput />
    </>
  );
}
