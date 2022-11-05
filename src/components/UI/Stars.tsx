import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const styles = StyleSheet.create({
  starContainer: {
    position: 'absolute',
    flexDirection: 'row',
    overflow: 'hidden',
  },
});

interface propType {
  width: number;
  color: string;
  size: number;
}

const Stars = ({width, color, size}: propType) => (
  <View style={[styles.starContainer, {width}]}>
    <FontAwesomeIcon icon={['fas', 'star']} color={color} size={size} />
    <FontAwesomeIcon icon={['fas', 'star']} color={color} size={size} />
    <FontAwesomeIcon icon={['fas', 'star']} color={color} size={size} />
    <FontAwesomeIcon icon={['fas', 'star']} color={color} size={size} />
    <FontAwesomeIcon icon={['fas', 'star']} color={color} size={size} />
  </View>
);

export default Stars;
