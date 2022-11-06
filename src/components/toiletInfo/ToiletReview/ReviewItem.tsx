/* eslint-disable camelcase */
import React from 'react';

import {View, Text} from 'react-native';

import commonStyles from '../../../common/commonStyles';

import {ReviewData} from '../../../common/toiletDataReducer';

export default function ReviewItem(props: ReviewData) {
  const {user_id, content} = props;
  return (
    <View
      style={{
        ...commonStyles.bottomBorderBox,
        borderColor: '#cacaca',
      }}>
      <Text style={{fontWeight: 'bold'}}>{user_id}</Text>
      <Text>{content}</Text>
    </View>
  );
}
