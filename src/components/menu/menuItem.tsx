import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  itemStyle: {
    marginBottom: 20,
    height: 30,
    width: '100%',
    justifyContent: 'flex-end',
  },
  menuTextStyle: {
    color: '#000',
    fontWeight: 'bold',
  },
});

interface menuItemProps {
  itemName: string;
}

export default function MenuItem(props: menuItemProps) {
  const {itemName} = props;

  return (
    <View style={styles.itemStyle}>
      <Text style={styles.menuTextStyle}>{itemName}</Text>
    </View>
  );
}
