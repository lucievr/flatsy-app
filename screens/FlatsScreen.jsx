import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

const FlatsScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Flats Screen</Text>
      <CustomButton onPress={() => navigation.navigate('Detail')}>
        See flat detail
      </CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FlatsScreen;
