import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colours from '../constants/colours';

const DefaultText = (props) => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'quicksand-semibold',
    fontSize: 16,
    color: Colours.primary
  },
});

export default DefaultText;
