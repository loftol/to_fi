import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import SignInContainer from './SignInContainer';
import {RootState} from '../../common/store';

export default function ContentContainer() {
  const showState = useSelector((state: RootState) => state.showState.id);

  function showWhat() {
    switch (showState) {
      case 0:
        break;
      case 1:
        return <SignInContainer />;
      default:
        break;
    }
    return <View />;
  }

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        zIndex: 9,
        height: showState !== 0 ? '80%' : 0,
        width: '100%',
        backgroundColor: '#fff0',
      }}>
      {showWhat()}
    </View>
  );
}
