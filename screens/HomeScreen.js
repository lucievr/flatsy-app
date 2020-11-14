import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import HomeIcon from '../assets/images/HomeIcon';
import Colours from '../constants/Colours';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Flatsy</Text>
      <HomeIcon />
      <Text>Find your perfect home with us!</Text>
      <Button style={styles.button} color={Colours.accent} title='View properties' onPress={() => navigation.navigate('Flats')} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  title: {
    fontFamily: 'quicksand-semibold',
    fontSize: 36,
    color: Colours.primary,
    margin: 20
  },
  // fix button, styles not applied, CustomButton + CustomText and apply fontFamily
  button: {
    margin: 50,
    borderRadius: 30,
    padding: 20,
  }
});

export default HomeScreen;
