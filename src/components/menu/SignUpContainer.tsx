import React, {useRef, useState} from 'react';
import {View, StyleSheet, TextInput, Text, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {change} from '../../common/showStateReducer';
import localInfo from '../../../localInfo';

const styles = StyleSheet.create({
  signUpInputContainer: {
    position: 'absolute',
    top: '5%',
    left: '5%',
    width: '90%',
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: '10%',
    backgroundColor: '#0000',
    zIndex: 9,
  },
  inputBox: {
    borderBottomColor: '#333',
    borderBottomWidth: 1,
    height: 55,
    width: '100%',
    padding: 5,
  },
  errorText: {
    color: '#b22',
  },
});

export default function SignUpContainer() {
  const dispatch = useDispatch();
  const idInputRef = useRef<TextInput>(null);
  const passInputRef = useRef<TextInput>(null);
  const passCheckInputRef = useRef<TextInput>(null);

  const [errorState, setErrorState] = useState('none');

  const request = useRef({id: '', password: ''}).current;
  const passCheck = useRef({val: ''});

  function removeInputs() {
    passInputRef.current?.clear();
    idInputRef.current?.clear();
    passCheckInputRef.current?.clear();
    request.id = '';
    request.password = '';
    passCheck.current.val = '';
  }

  const onSubmitHandler = () => {
    console.log(request.id);
    console.log(request.password);
    console.log(passCheck.current.val);
    setErrorState('none');
    if (request.id === '') setErrorState('needId');
    else if (request.password === '') setErrorState('needPassword');
    else if (passCheck.current.val === '') setErrorState('needCheck');
    else if (passCheck.current.val !== request.password)
      setErrorState('recheckPass');
    else
      axios
        .post(`${localInfo.hostIp}/signUp`, request)
        .then(() => {
          console.log('success');
        })
        .catch(e => {
          throw e;
        });
    removeInputs();
  };

  function message(text) {
    return <Text style={styles.errorText}>{text}</Text>;
  }

  function errorMessage() {
    switch (errorState) {
      case 'none':
        return message('');
      case 'needId':
        return message('ID를 입력하세요.');
      case 'needPassword':
        return message('비밀번호를 입력하세요.');
      case 'needCheck':
        return message('비밀번호 확인란에 비밀번호를 다시 입력해주세요.');
      case 'recheckPass':
        return message('비밀번호 확인과 비밀번호가 일치하지 않습니다.');
      default:
        return message('알 수 없는 에러입니다.');
    }
  }

  return (
    <View style={styles.signUpInputContainer}>
      <Text style={{fontWeight: 'bold'}}>Sign Up</Text>
      <TextInput
        ref={idInputRef}
        style={styles.inputBox}
        placeholder="ID"
        returnKeyType="next"
        onChange={({nativeEvent}) => {
          request.id = nativeEvent.text;
        }}
        onSubmitEditing={() => passInputRef.current?.focus()}
      />
      <TextInput
        ref={passInputRef}
        style={{...styles.inputBox, marginTop: '15%'}}
        placeholder="PASSWORD"
        returnKeyType="next"
        onChange={({nativeEvent}) => {
          request.password = nativeEvent.text;
        }}
        onSubmitEditing={() => passCheckInputRef.current?.focus()}
      />
      <TextInput
        ref={passCheckInputRef}
        style={{...styles.inputBox, marginTop: '15%', marginBottom: '10%'}}
        placeholder="PASSWORD CHECK"
        returnKeyType="send"
        onChange={({nativeEvent}) => {
          passCheck.current.val = nativeEvent.text;
        }}
        onSubmitEditing={() => onSubmitHandler()}
      />
      <Pressable onPress={() => dispatch(change(1))}>
        <Text>sign in</Text>
      </Pressable>
      {errorMessage()}
    </View>
  );
}
