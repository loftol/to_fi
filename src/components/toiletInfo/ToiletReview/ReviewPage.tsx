import React, {useRef, useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Animated,
  Button,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../common/store';
import {close} from '../../../common/isReviewOpenReducer';
import ReviewItem from './ReviewItem';
import localInfo from '../../../../localInfo';
import {ReviewData} from '../../../common/toiletDataReducer';

const styles = StyleSheet.create({
  reviewPageContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    zIndex: 4,
  },
});

export default function ReviewPage({toiletId}) {
  const isReviewOpen = useSelector(
    (state: RootState) => state.isReviewOpen.isReviewOpen,
  );
  const openedId = useSelector(
    (state: RootState) => state.isReviewOpen.openedId,
  );
  const [reviews, setReviews] = useState<Array<ReviewData>>([]);
  const dispatch = useDispatch();

  const windowWidth = Dimensions.get('window').height;
  const moveAnim = useRef(new Animated.Value(windowWidth)).current;

  useEffect(() => {
    if (isReviewOpen) {
      axios
        .get(`${localInfo.hostIp}/review/all/${openedId}`)
        .then(result => {
          console.log(result);
          const data = JSON.parse(result.data);
          setReviews(data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [isReviewOpen]);

  const moveLeft = async () => {
    Animated.timing(moveAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const moveRight = () => {
    Animated.timing(moveAnim, {
      toValue: windowWidth,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  if (isReviewOpen) moveLeft();
  else moveRight();

  return (
    <Animated.View
      style={{
        ...styles.reviewPageContainer,
        transform: [{translateX: moveAnim}],
      }}>
      <SafeAreaView>
        <Button title="close" onPress={() => dispatch(close())} />
        <ScrollView style={{padding: 10}}>
          {reviews.map(review => (
            <ReviewItem
              key={review.id}
              id={review.id}
              user_id={review.user_id}
              content={review.content}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </Animated.View>
  );
}
