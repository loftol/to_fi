import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import SquareButton from '../../UI/squareButton';

const profileImage = require('../../../image/profileImage.jpg');

const userName = '고양이..';

const styles = StyleSheet.create({
  containerStyle: {
    height: '25%',
    backgroundColor: '#fff',
  },
  imageStyle: {
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    borderRadius: 20,
    borderColor: '#020202',
    borderWidth: 3,
  },
  userStyle: {
    flexDirection: 'row',
    flex: 2,
  },
  imageContainerStyle: {
    flex: 1,
    padding: 10,
  },
  infoContainerStyle: {
    flex: 1,
    padding: 10,
  },
  buttonContainerStyle: {
    flex: 1,
  },
});

export default function ProfileContainer() {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.userStyle}>
        <View style={styles.imageContainerStyle}>
          <Image style={styles.imageStyle} source={profileImage} />
        </View>
        <View style={styles.infoContainerStyle}>
          <View style={{height: 20}} />
          <Text style={{color: '#111'}}>{userName}</Text>
        </View>
      </View>
      <View style={styles.buttonContainerStyle}>
        <SquareButton />
      </View>
    </View>
  );
}
