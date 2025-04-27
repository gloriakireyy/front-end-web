import React from 'react';
import {View, Text} from 'react-native';

const Header = () => (
  <View
    style={{
      backgroundColor: '#0A0A5B',
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
      Welcome to CSLearn!
    </Text>
  </View>
);

export default Header;
