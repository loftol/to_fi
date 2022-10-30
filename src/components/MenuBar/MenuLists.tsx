import React, {useState, useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/Entypo';
import MenuButton from './MenuButton';
import RoundButton from '../UI/RoundButton';
import {change} from '../../common/showStateReducer';

import {RootState} from '../../common/store';
import {hideMenuList, closeMenu} from '../../common/menuReducer';

const styles = StyleSheet.create({
  menuListsContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: '2%',
    marginLeft: '2%',
  },
});

const MenuLists = () => {
  const dispatch = useDispatch();
  const openedMenuId = useSelector(
    (state: RootState) => state.menu.openedMenu.id,
  );

  const [pressed, setPressed] = useState(false);

  const anim = useRef(new Animated.Value(0)).current;

  Animated.spring(anim, {
    toValue: 55,
    useNativeDriver: false,
  }).start();

  function makeMenuButton({key, iconName}) {
    return (
      <View
        key={key}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          aspectRatio: 1,
        }}>
        <Animated.View
          style={[
            {
              width: anim,
              height: anim,
            },
            styles.buttonContainer,
          ]}>
          <MenuButton
            id={key}
            openedMenuId={openedMenuId}
            iconName={iconName}
          />
        </Animated.View>
      </View>
    );
  }

  const menuProps = [
    {key: 1, iconName: 'menu'},
    {key: 2, iconName: 'menu'},
    {key: 3, iconName: 'menu'},
  ];

  return (
    <View style={styles.menuListsContainer}>
      <RoundButton
        onPressInHandler={() => {
          setPressed(true);
        }}
        onPressHandler={() => {
          setPressed(false);
          dispatch(change(0));
          dispatch(closeMenu());
          dispatch(hideMenuList());
        }}>
        <Icon name="menu" size={30} color={pressed ? '#fff' : '#3f94e9'} />
      </RoundButton>
      {menuProps.map(menuProp => makeMenuButton(menuProp))}
    </View>
  );
};

export default MenuLists;
