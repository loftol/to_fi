import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import Stars from '../../UI/Stars';

const styles = StyleSheet.create({
  starContainer: {
    width: 25 * 5,
  },
});

const RatingInput = ({rating, onRating}) => {
  const ratingId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function ratingBox(id: number) {
    return (
      <TouchableOpacity
        key={id}
        style={{
          height: '100%',
          width: 12.5,
        }}
        onPress={() => {
          onRating(id * 0.5);
        }}
      />
    );
  }
  return (
    <View style={styles.starContainer}>
      <Stars color="#919191" size={25} width={25 * 5} />
      <Stars color="#ff1d1d" size={25} width={25 * rating} />
      <View style={{flexDirection: 'row', height: 25}}>
        {ratingId.map(id => ratingBox(id))}
      </View>
    </View>
  );
};

export default RatingInput;
