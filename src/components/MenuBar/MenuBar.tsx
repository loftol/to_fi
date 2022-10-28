import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {close} from '../../common/isMenuOpenReducer';
import {closeInfo} from '../../common/infoOpened';
import {sendValue} from '../../common/searchReducer';
import RoundButton from '../UI/RoundButton';

const styles = StyleSheet.create({
  SearchBarStyle: {
    zIndex: 3,
    position: 'absolute',
    flexDirection: 'row',
    left: '10%',
    top: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '80%',
    height: 55,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  inputContainer: {
    marginLeft: '1%',
    marginRight: '1%',
    height: '100%',
    width: '75%',
  },
  textInput: {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
  },
});

export default function MenuBar() {
  const dispatch = useDispatch();
  const [textInputValue, setTextInputValue] = useState('');
  const [pressed, setPressed] = useState(false);
  return (
    <View style={styles.SearchBarStyle}>
      <RoundButton
        onPressInHandler={() => {
          setPressed(true);
        }}
        onPressOutHandler={() => {
          setPressed(false);
        }}>
        <Icon name="menu" size={30} color={pressed ? '#fff' : '#3f94e9'} />
      </RoundButton>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="장소 검색"
          value={textInputValue}
          onSubmitEditing={() => {
            dispatch(sendValue(textInputValue));
            setTextInputValue('');
          }}
          onChangeText={value => setTextInputValue(value)}
          onPressIn={() => {
            dispatch(closeInfo(''));
            dispatch(close());
          }}
        />
      </View>
    </View>
  );
}
