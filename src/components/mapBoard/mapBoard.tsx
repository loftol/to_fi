import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

export default function mapBoard() {
  return (
    <View style={{height: '100%', width: '100%'}}>
      <WebView
        styles={{height: '100%', width: '100%'}}
        source={{uri: 'http://192.168.219.102:3000'}}
      />
    </View>
  );
}
