import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { auth } from '../firebase/firebase';
import CustomButton from '../components/CustomButton';
import DefaultText from '../components/DefaultText';
import FlatsyLogo from '../assets/images/FlatsyLogo';
import HelloIcon from '../assets/images/HelloIcon.js';
import Colours from '../constants/colours';

const AccountScreen = ({ navigation }) => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <View style={styles.screen}>
      {currentUser ? (
        <View style={styles.accountContainer}>
          <View style={styles.greetingContainer}>
            <HelloIcon />
            <DefaultText style={styles.greeting}>
              Hello, {currentUser.displayName}!
            </DefaultText>
          </View>
          <View>
            <View style={styles.section}>
              <DefaultText>Your messages (0): </DefaultText>
              <DefaultText style={styles.sectionContent}>
                No messages
              </DefaultText>
            </View>
            <View style={styles.section}>
              <DefaultText>Your adverts (0): </DefaultText>
              <DefaultText style={styles.sectionContent}>
                No adverts
              </DefaultText>
            </View>
          </View>
          <CustomButton onPress={() => auth.signOut()}>Sign out</CustomButton>
        </View>
      ) : (
        <View style={styles.accountContainer}>
          <View style={styles.titleContainer}>
            <FlatsyLogo />
            <Text style={styles.title}>flatsy</Text>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={() => navigation.navigate('SignUp')}>
              Sign up
            </CustomButton>
            <CustomButton onPress={() => navigation.navigate('SignIn')}>
              Log in
            </CustomButton>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  accountContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  greetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontFamily: 'quicksand-semibold',
    fontSize: 46,
    color: Colours.primary,
  },
  greeting: {
    fontSize: 22,
    paddingLeft: 5,
  },
  section: {
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  sectionContent: {
    fontFamily: 'quicksand',
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
  },
});

export default AccountScreen;
