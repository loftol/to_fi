import {RootState} from '@common/store';
import React, {useRef} from 'react';
import {Dimensions, Animated, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

import SignInContainer from '../menu/SignInContainer';
import SignUpContainer from '../menu/SignUpContainer';

const windowHeight = Dimensions.get('window').height;

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
  // eslint-disable-next-line react/require-default-props
  style?: any;
}

const styles = StyleSheet.create({
  growingCircle: {
    backgroundColor: 'black',
    position: 'absolute',
    zIndex: 1,
  },
});

const GrowingCircle = ({from, to, pos, color, callBack, style}: propType) => {
  const showState = useSelector((state: RootState) => state.showState.id);
  const anim = useRef(new Animated.Value(0)).current;
  anim.setValue(from);

  Animated.spring(anim, {
    toValue: to,
    tension: 2,
    useNativeDriver: false,
  }).start(callBack ? callBack() : '');

  function showWhat() {
    switch (showState) {
      case 0:
        break;
      case 1:
        return <SignInContainer />;
      case 4:
        return <SignUpContainer />;
      default:
        break;
    }
    return <View />;
  }

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
        style,
      ]}>
      <Animated.View
        style={[
          {
            position: 'absolute',
            zIndex: 9,
            height: showState !== 0 ? '33%' : 0,
            width: '19%',
            backgroundColor: '#fff0',
            top: Animated.add(
              windowHeight * 0.1 - pos.y,
              Animated.divide(anim, 2),
            ),
            left: Animated.add(-pos.x, Animated.divide(anim, 2)),
          },
        ]}>
        {showWhat()}
      </Animated.View>
    </Animated.View>
  );
};

export default GrowingCircle;
