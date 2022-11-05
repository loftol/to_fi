import React from 'react';
import {View, StyleSheet} from 'react-native';

import Stars from '../../UI/Stars';

const styles = StyleSheet.create({
  starContainer: {
    marginBottom: 20,
    width: 25 * 5,
  },
});

const RatingStar = ({rating}) => (
  <View style={styles.starContainer}>
    <Stars color="#919191" size={25} width={25 * 5} />
    <Stars color="#ff1d1d" size={25} width={25 * rating} />
  </View>
);

export default RatingStar;
