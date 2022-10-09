import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {useDispatch} from 'react-redux';
import localData from '../../../localInfo';

export default function mapBoard() {
  const dispatch = useDispatch();

  const handleOnMessage = ({nativeEvent: {data}}) => {
    const {id} = JSON.parse(data);
  };

  return (
    <View style={{height: '100%', width: '100%'}}>
      <WebView
        styles={{height: '100%', width: '100%'}}
        source={{uri: localData.hostIp}}
        onMessage={e => handleOnMessage(e)}
      />
    </View>
  );
}
