import React from 'react';
import {View, Text} from 'react-native';

import commonStyles from '../../../common/commonStyles';

export default function ReviewItem() {
  return (
    <View style={{...commonStyles.bottomBorderBox, borderColor: '#cacaca'}}>
      <Text style={{fontWeight: 'bold'}}>멋진 이름</Text>
      <Text>예쁜 리뷰</Text>
    </View>
  );
}
