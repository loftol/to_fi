import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

import commonStyles from '../../../common/commonStyles';
import ReviewInput from './ReviewInput';
import ReviewItem from './ReviewItem';

import {ReviewData} from '../../../common/toiletDataReducer';
import {open} from '../../../common/isReviewOpenReducer';

library.add(faCoffee);

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
  toiletId: string;
}

export default function ToiletReviewList(props: PropTypes) {
  const dispatch = useDispatch();

  const buttonPressHandler = () => {
    dispatch(open());
  };

  const {reviews, toiletId} = props;

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
          <Icon name="star" />
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
      <ReviewInput toiletId={toiletId} />
    </>
  );
}
