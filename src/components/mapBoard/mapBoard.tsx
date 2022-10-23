import React, {useEffect, useRef} from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {useDispatch, useSelector} from 'react-redux';
import localInfo from '../../../localInfo';
import {addData} from '../../common/toiletDataReducer';
import {sendValue} from '../../common/searchReducer';
import {RootState} from '../../common/store';

export default function mapBoard() {
  const dispatch = useDispatch<any>();
  const searchValue = useSelector(
    (states: RootState) => states.searchValue.searchValue,
  );
  const searching = useSelector(
    (states: RootState) => states.searchValue.searching,
  );

  const handleOnMessage = ({nativeEvent: {data}}) => {
    const {id} = JSON.parse(data);
    if (id > 0) dispatch(addData(id));
  };

  const webViewRef = useRef<WebView>(null);

  useEffect(() => {
    if (searching && webViewRef.current) {
      webViewRef.current.postMessage(
        JSON.stringify({type: 'TOKEN', data: searchValue}),
      );
      dispatch(sendValue(''));
    }
  }, [searching]);

  return (
    <View style={{height: '100%', width: '100%'}}>
      <WebView
        style={{height: '100%', width: '100%'}}
        source={{uri: localInfo.hostIp}}
        onMessage={e => handleOnMessage(e)}
        ref={webViewRef}
      />
    </View>
  );
}
