import React from 'react';
import { View, StyleSheet } from 'react-native';

import Colours from '../constants/colours';
import CalendarIcon from '../assets/images/CalendarIcon';
import DefaultText from './DefaultText';

const DAY_IN_MS = 86400000;

const DatesInfo = ({ dateAdded, dateAvailable, detailed }) => {
  let creationDate;
  let availabilityDate;

  if (+dateAdded === 0) {
    creationDate = 'today';
  } else if (+dateAdded === 1) {
    creationDate = 'yesterday';
  } else {
    const d = new Date(Date.now() - +dateAdded * DAY_IN_MS);
    creationDate = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  }

  if (+dateAvailable === 0) {
    availabilityDate = 'immediately';
  } else {
    const d = new Date(Date.now() + +dateAvailable * DAY_IN_MS);
    availabilityDate = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  }

  if (detailed) {
    return (
      <>
        <DefaultText>Added {creationDate}</DefaultText>
        <View style={styles.available}>
        <CalendarIcon />
        <DefaultText style={styles.availableText}>Available {availabilityDate}</DefaultText>
        </View>
      </>
    );
  }
  return <DefaultText style={styles.coloured}>Added {creationDate}</DefaultText>;
};

const styles = StyleSheet.create({
  available: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  availableText: {
    color: Colours.darkAccent,
    paddingLeft: 10,
  },
  coloured: {
    color: Colours.darkAccent,
  }
});

export default DatesInfo;
