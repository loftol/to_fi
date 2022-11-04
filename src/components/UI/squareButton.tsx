/* eslint-disable no-unused-vars */
import React from 'react';
import {View, StyleSheet, Pressable, GestureResponderEvent} from 'react-native';

interface propType {
  pressHandler?: (event: GestureResponderEvent) => void;
  pressInHandler?: (event: GestureResponderEvent) => void;
  pressOutHandler?: (event: GestureResponderEvent) => void;
  color?: string;
  width?: string | number;
  height?: string | number;
  children?: JSX.Element;
}

function SquareButton({
  pressHandler = () => {},
  pressInHandler = () => {},
  pressOutHandler = () => {},
  color = 'black',
  width = 1,
  height = 1,
  children,
}: propType) {
  return (
    <Pressable
      style={{backgroundColor: color, width, height}}
      onPress={pressHandler}
      onPressIn={pressInHandler}
      onPressOut={pressOutHandler}>
      {children}
    </Pressable>
  );
}

export default SquareButton;
