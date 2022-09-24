import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  squareButtonStyle: {
    borderRadius: 5,
  },
  emptyStyle: {},
});

function SquareButton({length, onTouch}) {
  return (
    <View
      style={[
        styles.squareButtonStyle,
        {
          height: length,
          width: length,
        },
      ]}
      onTouchEnd={e => onTouch(e)}
    />
  );
}

SquareButton.propTypes = {
  length: PropTypes.number,
  onTouch: PropTypes.func,
};

SquareButton.defaultProps = {
  length: 10,
  onTouch: () => undefined,
};

export default SquareButton;
