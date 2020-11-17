import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import CustomButton from '../components/CustomButton';
import FlatsyLogo from '../assets/images/FlatsyLogo';
import Colours from '../constants/colours';

const AccountScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.titleContainer}>
        <FlatsyLogo />
        <Text style={styles.title}>flatsy</Text>
      </View>
      <CustomButton onPress={() => navigation.navigate('SignUp')}>
        Sign up
      </CustomButton>
      <CustomButton>Sign in</CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  title: {
    fontFamily: 'quicksand-semibold',
    fontSize: 46,
    color: Colours.primary,
  },
});

export default AccountScreen;
