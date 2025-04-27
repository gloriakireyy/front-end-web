import React from 'react';
import {Image, View} from 'react-native';

const Banner = () => {
  return (
    <View style={{padding: 20}}>
      <Image
        source={{uri: 'unklab.jpg'}}
        style={{width: '100%', height: 150, borderRadius: 10}}
        resizeMode="cover"
      />
    </View>
  );
};

export default Banner;
