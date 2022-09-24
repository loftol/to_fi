import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  itemStyle: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
    height: 30,
    borderBottomWidth: 0.5,
    borderBottomColor: '#cacaca',
  },
  menuTextStyle: {
    color: '#000',
    fontWeight: '400',
    fontSize: 18,
  },
});

function MenuItem({itemName}) {
  return (
    <View style={styles.itemStyle}>
      <Text style={styles.menuTextStyle}>{itemName}</Text>
    </View>
  );
}

MenuItem.propTypes = {
  itemName: PropTypes.string.isRequired,
};

export default MenuItem;
