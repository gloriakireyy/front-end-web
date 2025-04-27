import React from 'react';
import {View, Text, Image} from 'react-native';

const TutorList = ({name, subject}) => {
  return (
    <View
      style={{
        backgroundColor: '#E0E0E0',
        padding: 15,
        borderRadius: 10,
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        source={require('../assets/unklab.jpg')}
        style={{width: 40, height: 40, borderRadius: 20, marginRight: 15}}
      />
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>{name}</Text>
        <Text style={{color: '#555'}}>{subject}</Text>
      </View>
    </View>
  );
};

export default TutorList;
