import React, {useRef} from 'react';
import {Animated, StyleSheet} from 'react-native';

interface propType {
  from: number;
  to: number;
  pos: {
    x: number;
    y: number;
  };
  color: string;
  // eslint-disable-next-line react/require-default-props
  callBack?: Function;
}

const styles = StyleSheet.create({
  growingCircle: {
    backgroundColor: 'black',
    position: 'absolute',
    zIndex: 1,
  },
});

const GrowingCircle = ({from, to, pos, color, callBack}: propType) => {
  const anim = useRef(new Animated.Value(0)).current;
  anim.setValue(from);

  Animated.spring(anim, {
    toValue: to,
    tension: 2,
    useNativeDriver: false,
  }).start(callBack ? callBack() : '');

  return (
    <Animated.View
      style={[
        styles.growingCircle,
        {
          backgroundColor: color,
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
