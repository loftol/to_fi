import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, PanResponder} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

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

const RatingInput = () => {
  const starContainerRef = useRef<View>(null);
  let basis: number;
  useEffect(() => {
    starContainerRef.current?.measure((x, y, width, height, pageX) => {
      basis = pageX;
      console.log('basis: ', basis);
    });
  }, [starContainerRef.current]);
  let rating: number = 0;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: () => {
        console.log(basis);
      },
    }),
  );

  return (
    <View
      style={styles.starContainer}
      {...panResponder.current.panHandlers}
      ref={starContainerRef}>
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
};

export default RatingInput;
