import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const FlatsScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Flats Screen</Text>
      <Button
        title='See flat detail'
        onPress={() => navigation.navigate('Detail')}
      />
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
