import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';

import MenuLists from './MenuLists';

import {closeInfo} from '../../common/infoOpened';
import {sendValue} from '../../common/searchReducer';

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

  return (
    <View style={styles.SearchBarStyle}>
      <MenuLists />
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
          }}
        />
      </View>
    </View>
  );
}
