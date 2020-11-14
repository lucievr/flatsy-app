import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import Colours from '../constants/colours';

const CustomButton = (props) => {
  let ButtonComponent = TouchableOpacity; // for iOS

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent onPress={props.onPress} activeOpacity={0.7}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 45,
    overflow: 'hidden',
    width: '90%',
    maxWidth: 400
  },
  button: {
    backgroundColor: Colours.accent,
    paddingTop: 12,
    paddingBottom: 15,
    borderRadius: 45,
    margin: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: Colours.primary,
    fontFamily: 'quicksand-semibold',
    fontSize: 22,
    // textTransform: 'uppercase',
  },
});

export default CustomButton;
