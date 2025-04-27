import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../components/Header.js';
import Banner from '../components/Banner.js';
import MenuButton from '../components/MenuButton.js';
import TutorList from '../components/TutorList.js';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Header />
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <Banner />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 10,
          }}>
          <MenuButton title="Course" onPress={() => {}} />
          <MenuButton title="Subject" onPress={() => {}} />
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 20}}>
            Thank you for choosing this tutors!
          </Text>
          <Text style={{fontSize: 12, color: '#555', marginBottom: 10}}>
            Have a nice day and don't forget to join our courses again to learn
            more and to help you study!
          </Text>

          <TutorList name="Hizkia Siregar" subject="Programming" />
          <TutorList name="Joshua Dadung" subject="Data Mining" />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
