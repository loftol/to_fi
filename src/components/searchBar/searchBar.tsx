import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import React from 'react';
import {useDispatch} from 'react-redux';
import {open} from '../../common/isMenuOpenReducer';

const styles = StyleSheet.create({
  SearchBarStyle: {
    zIndex: 1,
    position: 'absolute',
    flexDirection: 'row',
    left: '10%',
    top: 20,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#fff',
    width: '80%',
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  IconContainerStyle: {
    width: '15%',
    height: '100%',
    borderRightColor: '#3f94e9',
    borderRightWidth: 1,
  },
  IconWrapperStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    marginLeft: 10,
    marginRight: 5,
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

export default function SearchBar() {
  const dispatch = useDispatch();
  return (
    <View style={styles.SearchBarStyle}>
      <View style={styles.IconContainerStyle}>
        <TouchableOpacity
          style={styles.IconWrapperStyle}
          onPress={() => {
            dispatch(open());
            Keyboard.dismiss();
          }}>
          <Icon name="menu" size={30} color="#3f94e9" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="장소 검색" />
      </View>
    </View>
  );
}
