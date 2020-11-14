import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const FlatDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Flat Detail Screen</Text>
      <Button
        title='Contact now!'
        onPress={() => navigation.navigate('Contact')}
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

export default FlatDetailScreen;
