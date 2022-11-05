import React from 'react';
import {View, StyleSheet} from 'react-native';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faStar as Star} from '@fortawesome/free-solid-svg-icons';
import {faStar as emptyStar} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

library.add(Star, emptyStar);

const styles = StyleSheet.create({
  starContainer: {
    marginBottom: 20,
  },
  frontStar: {
    position: 'absolute',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  backgroundStar: {
    position: 'absolute',
    flexDirection: 'row',
  },
});

const RatingStar = ({rating}) => (
  <View style={styles.starContainer}>
    <View style={styles.backgroundStar}>
      <FontAwesomeIcon icon={['fas', 'star']} color="#919191" size={25} />
      <FontAwesomeIcon icon={['fas', 'star']} color="#919191" size={25} />
      <FontAwesomeIcon icon={['fas', 'star']} color="#919191" size={25} />
      <FontAwesomeIcon icon={['fas', 'star']} color="#919191" size={25} />
      <FontAwesomeIcon icon={['fas', 'star']} color="#919191" size={25} />
    </View>
    <View style={[styles.frontStar, {width: rating * 25}]}>
      <FontAwesomeIcon icon={['fas', 'star']} color="#ff1d1d" size={25} />
      <FontAwesomeIcon icon={['fas', 'star']} color="#ff1d1d" size={25} />
      <FontAwesomeIcon icon={['fas', 'star']} color="#ff1d1d" size={25} />
      <FontAwesomeIcon icon={['fas', 'star']} color="#ff1d1d" size={25} />
      <FontAwesomeIcon icon={['fas', 'star']} color="#ff1d1d" size={25} />
    </View>
  </View>
);

export default RatingStar;
