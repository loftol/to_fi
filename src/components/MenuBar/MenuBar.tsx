import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/Entypo';
import MenuLists from './MenuLists';
import RoundButton from '../UI/RoundButton';

import {RootState} from '../../common/store';
import {closeInfo} from '../../common/infoOpened';
import {sendValue} from '../../common/searchReducer';
import {showMenuList} from '../../common/menuReducer';

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
    height: '100%',
    width: '80%',
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
  const isMenuShown = useSelector((state: RootState) => state.menu.isMenuShown);

  const [pressed, setPressed] = useState(false);

  const [textInputValue, setTextInputValue] = useState('');

  return (
    <View style={styles.SearchBarStyle}>
      {isMenuShown ? (
        <MenuLists />
      ) : (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
          }}>
          <RoundButton
            onPressInHandler={() => setPressed(true)}
            onPressHandler={() => {
              setPressed(false);
              dispatch(showMenuList());
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
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
}
