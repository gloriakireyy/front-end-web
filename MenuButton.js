import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const MenuButton = ({title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#0A0A5B',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginHorizontal: 10,
      }}>
      <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MenuButton;
