import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  button: {
    elevation: 5,
    zIndex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
    aspectRatio: 1,
    borderRadius: 50,
    marginLeft: '3%',
    marginRight: '3%',
  },
  text: {
    color: 'white',
  },
});

export default function RoundButton({
  onPressInHandler,
  onPressOutHandler,
  onPressHandler,
  children,
}) {
  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        {backgroundColor: pressed ? '#3f94e9' : '#ffffff'},
      ]}
      onPressIn={onPressInHandler}
      onPressOut={onPressOutHandler}
      onPress={onPressHandler}>
      {children}
    </Pressable>
  );
}

RoundButton.propTypes = {
  onPressHandler: PropTypes.func,
  onPressInHandler: PropTypes.func,
  onPressOutHandler: PropTypes.func,
};

RoundButton.defaultProps = {
  onPressHandler: () => {},
  onPressInHandler: () => {},
  onPressOutHandler: () => {},
};
