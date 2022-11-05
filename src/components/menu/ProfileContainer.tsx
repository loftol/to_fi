import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '@common/store';

export default function ProfileContainer() {
  const userID = useSelector((state: RootState) => state.userId.id);

  return (
    <View>
      <Text>{userID}</Text>
    </View>
  );
}
