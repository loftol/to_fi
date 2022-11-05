import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

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
      <FontAwesomeIcon icon={faStar} color="#919191" size={25} />
      <FontAwesomeIcon icon={faStar} color="#919191" size={25} />
      <FontAwesomeIcon icon={faStar} color="#919191" size={25} />
      <FontAwesomeIcon icon={faStar} color="#919191" size={25} />
      <FontAwesomeIcon icon={faStar} color="#919191" size={25} />
    </View>
    <View style={[styles.frontStar, {width: rating * 25}]}>
      <FontAwesomeIcon icon={faStar} color="#ff1d1d" size={25} />
      <FontAwesomeIcon icon={faStar} color="#ff1d1d" size={25} />
      <FontAwesomeIcon icon={faStar} color="#ff1d1d" size={25} />
      <FontAwesomeIcon icon={faStar} color="#ff1d1d" size={25} />
      <FontAwesomeIcon icon={faStar} color="#ff1d1d" size={25} />
    </View>
  </View>
);

export default RatingStar;
