import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import HomeIcon from '../assets/images/HomeIcon';
import Colours from '../constants/colours';
import DefaultText from '../components/DefaultText';
import CustomButton from '../components/CustomButton';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Flatsy</Text>
      <HomeIcon />
      <DefaultText>Find your perfect home with us!</DefaultText>
      <CustomButton onPress={() => navigation.navigate('Flats')}>View properties</CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    justifyContent: 'space-evenly', 
    alignItems: 'center',
  },
  title: {
    fontFamily: 'quicksand-semibold',
    fontSize: 36,
    color: Colours.primary,
    margin: 20
  },
});

export default HomeScreen;
