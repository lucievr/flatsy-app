import React from 'react';

import { StyleSheet } from 'react-native';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

import Colours from '../constants/colours';

const CustomRadioButton = ({ selected, options, onPress }) => {
  return (
    <RadioForm>
      {options.map((obj, i) => (
        <RadioButton labelHorizontal={true} key={i} style={styles.radioBtn}>
          <RadioButtonInput
            obj={obj}
            index={i}
            isSelected={selected === i}
            onPress={onPress}
            buttonInnerColor={Colours.accent}
            buttonOuterColor={Colours.accent}
            buttonSize={10}
            buttonOuterSize={20}
          />
          <RadioButtonLabel
            obj={obj}
            index={i}
            labelHorizontal={true}
            onPress={onPress}
            labelStyle={styles.label}
          />
        </RadioButton>
      ))}
    </RadioForm>
  );
};

const styles = StyleSheet.create({
  radioBtn: {
    marginVertical: 12,
  },
  label: {
    fontFamily: 'quicksand-semibold',
    fontSize: 18,
    color: Colours.primary,
  }
})

export default CustomRadioButton;
