import React, {useRef} from 'react';
import {Animated, StyleSheet} from 'react-native';

interface propType {
  from: number;
  to: number;
  pos: {
    x: number;
    y: number;
  };
  // eslint-disable-next-line react/require-default-props
  callBack?: Function;
}

const styles = StyleSheet.create({
  growingCircle: {
    backgroundColor: '#3f94e9',
    position: 'absolute',
    zIndex: 1,
  },
});

const GrowingCircle = ({from, to, pos, callBack}: propType) => {
  const anim = useRef(new Animated.Value(from)).current;

  Animated.spring(anim, {
    toValue: to,
    tension: 5,
    useNativeDriver: false,
  }).start(callBack ? callBack() : '');

  return (
    <Animated.View
      style={[
        styles.growingCircle,
        {
          top: Animated.subtract(pos.y, Animated.divide(anim, 2)),
          left: Animated.subtract(pos.x, Animated.divide(anim, 2)),
          height: anim,
          aspectRatio: 1,
          borderRadius: Animated.divide(anim, 2),
        },
      ]}
    />
  );
};

export default GrowingCircle;
