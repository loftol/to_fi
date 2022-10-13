import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import React from 'react';
import {useDispatch} from 'react-redux';
import {open} from '../../common/isMenuOpenReducer';

const styles = StyleSheet.create({
  SearchBarStyle: {
    position: 'absolute',
    flexDirection: 'row',
    left: '10%',
    top: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    width: '80%',
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#9cf',
  },
  IconContainerStyle: {
    width: '15%',
    height: '100%',
    borderRightColor: '#9cf',
    borderRightWidth: 1,
  },
  IconWrapperStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function SearchBar() {
  const dispatch = useDispatch();

  return (
    <View style={styles.SearchBarStyle}>
      <View style={styles.IconContainerStyle}>
        <TouchableOpacity
          style={styles.IconWrapperStyle}
          onPress={() => dispatch(open())}>
          <Icon name="menu" size={30} color="#9cf" />
        </TouchableOpacity>
      </View>

      <TextInput />
      <View />
    </View>
  );
}
