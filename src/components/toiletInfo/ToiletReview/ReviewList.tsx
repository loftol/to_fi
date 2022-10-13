import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {open} from '../../../common/isReviewOpenReducer';

import commonStyles from '../../../common/commonStyles';
import ReviewInput from './ReviewInput';
import ReviewItem from './ReviewItem';

import {ReviewData} from '../../../common/toiletDataReducer';

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
    backgroundColor: '#000',
  },
  buttonStyle: {
    color: '#000',
  },
});

interface PropTypes {
  reviews: Array<ReviewData>;
}

export default function ToiletReviewList(props: PropTypes) {
  const dispatch = useDispatch();

  const buttonPressHandler = () => {
    dispatch(open());
  };

  const {reviews} = props;

  const showReview = reviews.map(review => (
    <ReviewItem
      key={review.id}
      id={review.id}
      name={review.name}
      main={review.main}
    />
  ));

  return (
    <>
      <View style={styles.reviewContainer}>
        <View style={commonStyles.bottomBorderBox}>
          <Text>4.0 점 별별별별별</Text>
        </View>
        {showReview}
        <View style={styles.showMoreReviewButton}>
          <Button
            color="#333"
            title="리뷰 더 보기"
            onPress={buttonPressHandler}
          />
        </View>
      </View>
      <ReviewInput />
    </>
  );
}
