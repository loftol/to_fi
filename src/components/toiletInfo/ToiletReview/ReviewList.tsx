import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {useDispatch} from 'react-redux';

import ReviewInput from './ReviewInput';
import ReviewItem from './ReviewItem';

import {ReviewData} from '../../../common/toiletDataReducer';
import {open} from '../../../common/isReviewOpenReducer';
import RatingStar from './RatingStar';

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
  starBox: {
    flexDirection: 'row',
  },
});

interface PropTypes {
  reviews: Array<ReviewData>;
  toiletId: string;
  rating: number;
}

export default function ToiletReviewList(props: PropTypes) {
  const dispatch = useDispatch();

  const buttonPressHandler = () => {
    dispatch(open());
  };

  const {reviews, toiletId, rating} = props;
  const showReview = reviews.map(review => (
    <ReviewItem
      key={review.id}
      id={review.id}
      user_id={review.user_id}
      content={review.content}
    />
  ));

  return (
    <>
      <View style={styles.reviewContainer}>
        <RatingStar rating={rating} />
        {showReview}
        <View style={styles.showMoreReviewButton}>
          <Button
            color="#333"
            title="리뷰 더 보기"
            onPress={buttonPressHandler}
          />
        </View>
      </View>
      <ReviewInput toiletId={toiletId} />
    </>
  );
}
