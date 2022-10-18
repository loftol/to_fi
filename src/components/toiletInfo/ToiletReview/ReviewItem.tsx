import React from 'react';

import {View, Text} from 'react-native';

import commonStyles from '../../../common/commonStyles';

import {ReviewData} from '../../../common/toiletDataReducer';

export default function ReviewItem(props: ReviewData) {
  const {name, main} = props;
  return (
    <View
      style={{
        ...commonStyles.bottomBorderBox,
        borderColor: '#cacaca',
      }}>
      <Text style={{fontWeight: 'bold'}}>{name}</Text>
      <Text>{main}</Text>
    </View>
  );
}
