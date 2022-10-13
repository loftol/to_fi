import React from 'react';
import {Text, StyleSheet, Pressable, GestureResponderEvent} from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: '#63c9856c',
    borderWidth: 1,
    marginTop: 5,
  },
  text: {
    color: 'white',
  },
});

type PropType = {
  title: string;
  // eslint-disable-next-line react/require-default-props, no-unused-vars
  onPressHandler?: (event: GestureResponderEvent) => void;
};

export default function RoundButton({onPressHandler, title}: PropType) {
  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        {backgroundColor: pressed ? '#474a87' : '#777cdd'},
      ]}
      onPress={onPressHandler}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
