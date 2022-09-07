import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import UserMenu from './userMenu';

export default function MenuContainer() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const position: 'absolute' | 'relative' | undefined = 'absolute';

  const menuContainer = {
    position,
    top: 0,
    left: isOpen ? 0 : -200,
    width: 200,
    height: '100%',
    backgroundColor: '#fff',
  };

  return (
    <View style={menuContainer}>
      <UserMenu />
    </View>
  );
}
