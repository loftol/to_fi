import React, {useState, useRef} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import localInfo from '../../../../localInfo';
import RatingInput from './RatingInput';
import {updateReview} from '../../../common/toiletDataReducer';

const styles = StyleSheet.create({
  reviewInputContainer: {
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  inputBox: {
    backgroundColor: 'white',
    padding: 5,
    marginTop: 5,
  },
  submitButton: {},
});

export default function ReviewInput({toiletId}) {
  const dispatch = useDispatch<any>();
  const inputRef = useRef<TextInput>(null);
  const [main, setMain] = useState('');
  const [rating, setRating] = useState(5);
  const onSubmitHandler = () => {
    setRating(0);
    axios
      .post(`${localInfo.hostIp}/review/${toiletId}`, {
        content: main,
        userId: 1,
        rating,
      })
      .then(result => {
        if (result.status === 201) return console.log('success');
        throw new Error('error');
      })
      .then(() => {
        inputRef.current?.clear();
        dispatch(updateReview(toiletId));
      })
      .catch(err => console.log(err));
  };
  const onRatingHandler = (id: number) => {
    setRating(id);
  };

  return (
    <View style={styles.reviewInputContainer}>
      <Text style={{fontWeight: 'bold'}}>리뷰 작성</Text>
      <RatingInput onRating={onRatingHandler} rating={rating} />
      <TextInput
        ref={inputRef}
        style={styles.inputBox}
        placeholder="리뷰를 입력해주세요"
        returnKeyType="send"
        onSubmitEditing={onSubmitHandler}
        onChange={val => setMain(val.nativeEvent.text)}
        multiline
      />
      <View style={{marginTop: '2%'}}>
        <Button color="#104cff" title="리뷰 제출" onPress={onSubmitHandler} />
      </View>
    </View>
  );
}
