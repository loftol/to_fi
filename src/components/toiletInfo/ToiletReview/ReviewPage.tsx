import React, {useRef} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Animated,
  Button,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../common/store';
import {close} from '../../../common/isReviewOpenReducer';

const styles = StyleSheet.create({
  reviewPageContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: '#1cd883',
    zIndex: 4,
  },
});

export default function ReviewPage() {
  const isReviewOpen = useSelector(
    (state: RootState) => state.isReviewOpen.isReviewOpen,
  );
  const dispatch = useDispatch();

  const windowWidth = Dimensions.get('window').height;
  const moveAnim = useRef(new Animated.Value(windowWidth)).current;

  const moveLeft = () => {
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
      </SafeAreaView>
    </Animated.View>
  );
}
