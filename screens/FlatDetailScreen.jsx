import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import CustomButton from '../components/CustomButton';

const FlatDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Flat Detail Screen</Text>
      <CustomButton onPress={() => navigation.navigate('Contact')}>
        Contact now!
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

export default FlatDetailScreen;
