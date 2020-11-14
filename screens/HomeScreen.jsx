import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FlatsyLogo from '../assets/images/FlatsyLogo';
import FlatsyHomeIcon from '../assets/images/FlatsyHomeIcon';
import Colours from '../constants/colours';
import DefaultText from '../components/DefaultText';
import CustomButton from '../components/CustomButton';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
    <View style={styles.titleContainer}>
      <FlatsyLogo />
      <Text style={styles.title}>flatsy</Text>
    </View>
      <FlatsyHomeIcon />
      <DefaultText style={styles.subtitle}>Find your perfect home with us today!</DefaultText>
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
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontFamily: 'quicksand-semibold',
    fontSize: 46,
    color: Colours.primary,
  },
  subtitle: {
    fontSize: 20,
    maxWidth: '60%',
    textAlign: 'center'
  }
});

export default HomeScreen;
