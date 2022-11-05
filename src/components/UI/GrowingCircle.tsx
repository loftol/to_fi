import React, {useRef} from 'react';
import {Dimensions, Animated, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ProfileContainer from '../menu/ProfileContainer';
import {change} from '../../common/showStateReducer';
import {RootState} from '../../common/store';
import {setUserData} from '../../common/userInfoReducer';
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
    position: 'absolute',
    zIndex: 1,
  },
});

const GrowingCircle = ({from, to, pos, color, callBack, style}: propType) => {
  const showState = useSelector((state: RootState) => state.showState.id);
  const userID = useSelector((state: RootState) => state.userId.id);

  const dispatch = useDispatch();

  const anim = useRef(new Animated.Value(0)).current;
  const xrev = useRef(new Animated.Value(0)).current;
  const yrev = useRef(new Animated.Value(0)).current;
  anim.setValue(from);
  xrev.setValue(0);
  yrev.setValue(0);

  Animated.spring(anim, {
    toValue: to,
    tension: 2,
    useNativeDriver: false,
  }).start(callBack ? callBack() : '');

  Animated.spring(xrev, {
    toValue: -pos.x + to / 2,
    tension: 2,
    useNativeDriver: false,
  }).start(callBack ? callBack() : '');

  Animated.spring(yrev, {
    toValue: -pos.y + to / 2,
    tension: 2,
    useNativeDriver: false,
  }).start(callBack ? callBack() : '');

  function showWhat() {
    switch (showState) {
      case 0:
        break;
      case 1:
        return userID === null ? <SignInContainer /> : <ProfileContainer />;
      case 2:
        dispatch(setUserData({id: null}));
        dispatch(change(1));
        break;
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
            top: Animated.add(windowHeight * 0.1, yrev),
            left: xrev,
          },
        ]}>
        {showWhat()}
      </Animated.View>
    </Animated.View>
  );
};

export default GrowingCircle;
