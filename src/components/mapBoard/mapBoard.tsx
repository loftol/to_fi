import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {useDispatch} from 'react-redux';
import localInfo from '../../../localInfo';
import {addData} from '../../common/toiletDataReducer';

export default function mapBoard() {
  const dispatch = useDispatch<any>();

  const handleOnMessage = ({nativeEvent: {data}}) => {
    const {id} = JSON.parse(data);
    dispatch(addData(+id));
  };

  return (
    <View style={{height: '100%', width: '100%'}}>
      <WebView
        styles={{height: '100%', width: '100%'}}
        source={{uri: localInfo.hostIp}}
        onMessage={e => handleOnMessage(e)}
      />
    </View>
  );
}
